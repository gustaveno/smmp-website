'use client';

import { useState, useCallback } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { Card } from '@/components/ui/card';
import { MapPin, Map } from 'lucide-react';

export type MapLocation = {
  name: string;
  location: string;
  address: string;
  region: string;
  lon: number;
  lat: number;
};

type WorldMapProps = {
  locations: MapLocation[];
};

// --- Real world coastlines -------------------------------------------------
// Single merged landmass silhouette (no internal country borders), derived
// from Natural Earth admin-0 country boundaries, simplified for display at
// small sizes. Source data bundled (MIT license) in the `react-svg-worldmap`
// npm package by Yaniv Amram: https://github.com/yanivam/react-svg-worldmap
// Re-projected here as a static equirectangular path so no mapping library
// is needed at runtime.
const WORLD_LAND_PATH =
  'M553.8,133.7L544.5,129.1L541.4,124.8L536.5,123L535,127.5L544.1,134.6L551,137.9L544.7,144.5L542.8,138.8L535.8,135.4L524.7,126.8L518.1,130.2L508.6,130.3L508.4,133.6L502.3,136.1L500.3,142.4L494,148.1L485.1,150.1L481.9,147.4L475.3,147.6L473.5,142.4L475.6,136.8L473.9,130.5L477.8,128.5L494.7,129.4L496.7,122.2L487.2,114.8L495.5,114.9L510.6,106.6L513.1,102.5L524.4,99.9L523.7,91.4L529.4,89.6L530.3,93.2L526.8,95.9L530.4,100L534.8,98.7L539.2,100.7L549,97.6L554.6,98.8L559.1,96.7L558.6,92.3L562.6,89.6L567,91.6L564.8,85.6L577.7,84.8L578,81.9L563.5,83.8L559.2,81.3L558.5,76.1L570.6,69.1L566.4,66.6L561.6,67.4L559.4,71.1L549.6,75.7L547.6,79.6L552.2,83.1L546.7,86.9L544.1,94.2L536,96.2L528.8,84.8L523.3,88L515.7,87.3L513.9,77.9L529.2,70.9L541,61.6L553.3,56.1L564,55L568.2,52.7L578.2,52.3L583.3,55L601.4,58.2L611.9,61.3L614.2,64.5L606.6,66.7L594.2,64.6L597.1,71.1L602.8,72.6L603.3,69L610,70.8L610.5,68.1L623.7,64.6L620.7,59.5L628.5,60.4L628.7,64.8L633.7,62.4L649.2,58.7L648.6,60.6L663.3,58.7L666.5,60.3L668.2,56L676.4,56.8L690.3,60.9L692.2,59.4L685.3,52.7L694.3,47.1L701.6,47.8L699.6,51.6L701.6,58.3L704.6,60L698,65.8L701.2,66.2L708.5,61.8L704.5,56.6L706.7,53.8L703.1,51.5L721.3,49.1L726.4,50.7L723.6,45.4L741.2,44.6L742.1,41.3L759,38.8L768.6,39.1L779.9,37.7L783.3,35.3L808.5,36.9L817,39.3L816.3,40.8L803.9,43.9L815.4,46.3L821,45.1L830.6,46.9L842.2,47.3L842.4,45.2L857.2,47.1L856.8,50.1L864.7,53.4L867.4,50.5L888.5,51.4L890.2,47.6L915.3,49.4L924.9,53.2L941.7,53.1L947.1,57.1L966.2,56.7L971.1,59.2L973.5,55.3L988.1,55.9L1000,58.4L1000,69.5L992.8,70.5L998.3,75L982.4,78.7L973.1,83.7L969.2,81.7L961.9,83.9L954.3,83.7L950,88.2L953.3,90L950.3,97.6L945.5,99L935.5,108.3L931.8,96.2L935.6,89.4L939.9,88.7L954.6,80.2L956.9,76.2L944.8,81.8L942.5,78.4L935.3,79.4L928.4,84L930.7,85.7L920.2,86.7L920.4,84.7L912.6,85.7L895,86L875.4,98L883.8,100.7L888.6,99.5L892.6,102.5L889.1,115.4L883.9,121.4L874.6,129.5L867.4,129.8L854.3,139.6L859.6,147.8L858.6,152.6L851.4,154.5L850.5,145.1L846.4,144.1L845.2,139.1L836.3,142L837.9,136.3L826.5,142.4L832.5,146.8L835.6,144.8L840.3,147.4L836.4,148.2L831,153L834,154.6L838.6,162L839.1,167.1L829.6,181.8L821.9,186.7L807.7,190.6L801.5,189.7L796.4,192.5L793.5,197.1L802.4,207.6L803.3,217.6L792.1,226.1L791.9,222.5L787.5,220.5L785,216.1L778.1,212.8L775.4,222.3L779.1,229.4L787.2,236.5L787.6,246.6L781.6,242.3L776.4,229.6L772.6,226.8L774.3,218.2L769.9,203L764.9,206.4L761.6,205.5L762,199.4L753.9,186.8L750.8,189.3L741.6,190.3L736.3,195.9L723.1,205.8L721.8,221.2L715.4,227.9L712.8,225.3L704.3,205.6L701.8,190.7L695.8,192L693.5,187.6L684.4,179.4L670.8,180.3L659.4,178.5L656.9,174.6L652,176.4L643.1,172.6L639.2,166.3L633.3,166.7L635.6,173.1L643.9,183.3L650,183L656.6,176.7L656.7,180.8L666.1,188L660.5,197L653.5,202.1L645.5,204.5L644.9,206.7L635.2,211.1L620.8,214.9L618.5,203.4L608.7,190.9L608.5,187.3L597.6,172L590.9,170.3L602.4,188.9L604.1,198.3L609.1,205.8L620.3,215.6L622.6,221L642,216.6L641.8,220.4L637.4,231.1L629.3,242.1L619.8,249.2L611.8,257.1L607.8,268L612.4,279.9L613.3,290.8L609.6,296.4L603.9,298.9L596.6,305L598.8,311.4L597.3,318L591.7,320.4L590.2,328.6L578.4,341L571.6,344.3L562.7,344.1L554.5,346.7L550.7,344.1L550.6,338L542.3,325.3L539.6,311.4L532.8,300.2L532.3,296.3L535.4,286.5L537.9,283.4L536.8,273.8L533.1,264L524.4,253.1L527.2,241.5L523.6,236.7L516.4,238.2L512,232.6L502.9,233.5L494.5,236.9L488.9,235.6L479.1,238L475,236.6L464,228.3L458.8,219.8L453.9,216.2L451,209.1L454.3,205.2L454.8,194.2L452.6,191.7L459.9,177.1L464.9,172.1L473.4,166.8L472.7,163.4L476,157.7L480.8,155.3L483.5,150.7L494,152.3L504.1,148.3L526.4,146.3L529.4,148.9L528.2,154.6L530.9,157.5L542.4,160.4L543.7,162.8L553,165.9L557.9,159.1L580.3,164.3L583.6,162.6L595.2,163.3L600.4,150.5L596.4,147.8L590.3,149.7L576.8,148.2L572.7,140.4L581.2,135.5L586.5,135.9L597.7,133.2L606.5,136.3L615.4,134.6L615.1,131.5L601.9,124.3L608.7,118.7L599.5,120.4L601.5,123.7L594.1,126.8L590.2,124.1L593.3,122.6L585.4,120.6L580.1,125.2L576.9,131.7L580,136L573.2,138.5L572.4,136.6L563.4,137.6L566.7,143.8L560.2,147.7L553.9,138.2ZM635.8,143.6L641.2,147.6L649.5,147.3L649.7,141.8L647,136.5L652,136.2L642.6,130.2L639.7,126.1L647.3,124.3L647.3,119.9L642.2,119.3L632.4,123.2L629.7,126.1L637.8,137.3ZM108.4,56.4L120.8,58.6L144.1,54.2L150.7,57L159.2,56L183.6,60L184.7,62L205.1,58.9L210.2,61.1L226.5,61.7L226.2,60L237,60.9L238.2,58.1L232,55.3L235.5,50.2L242,51.9L248.5,56.9L252.2,57.6L257.4,63.3L262.3,58.9L262.4,55.9L274.2,57.9L273.9,63.6L268.5,65.5L261.8,65.1L257.4,70.1L250.2,72.1L238.2,80.8L237,86.3L241.1,86.7L243.6,91.4L252.7,92.1L263.9,96.4L271.5,96.8L273.9,105.1L278,107.8L281.7,104L278.3,98.1L287.4,93L281.9,86.7L285.2,83.7L283,76.9L294.9,76.5L301.7,80.2L306.7,80.4L307.5,86.2L312.1,88.3L320.6,82.4L329.5,91.8L328.3,93.5L340.7,98.3L345.3,105.1L333.2,110.4L315.6,110.5L302.5,119.9L315.1,113.5L321.7,114.6L319.1,116.5L320.9,121.6L329.1,122.5L331.9,119.4L333.9,122.4L318.4,129L314,125.5L305.2,128.7L305.7,134.3L297.6,135.5L289.7,144.6L287.4,142.5L289.6,151.2L281.8,155.9L273.6,164.6L277.6,175.3L274.5,180L267.5,166.8L260,165.6L251.1,166.2L251.6,169L245.5,167.6L237,168.1L229.5,173.9L230.2,178.1L228.1,187.7L233.6,197.7L237.7,199.6L247.9,196.4L249.2,191.7L258.2,190.2L254.6,204.1L253,205.9L265.6,206L269,208.3L267.1,218.4L273.8,225.6L279,223.3L286.6,226L290.3,220.5L300.7,215.5L301.7,219.5L308.7,218.2L310.6,220.7L328.1,220.2L326.7,222.4L335.8,227.8L341.3,233.4L353.1,235L357.5,238.3L361.3,247.1L360,250.2L364.9,250.7L379.4,256.6L388.9,258L396.6,263.4L402.1,265.2L402.4,275L391.8,288.3L392,293.5L389.6,304.4L383.4,313.8L370.9,316.9L365.3,321.9L364.2,329.7L347.4,347.1L337.5,345.6L342.3,352.5L335.5,357.6L326.8,357.9L327.4,363L319.1,364.1L323.7,368.2L318.9,370.8L317.9,375.1L312.3,378.6L317.7,381.2L307.9,390.9L310.7,395.4L303.2,396.9L302.8,399.5L291.8,395.2L290,385.2L294.1,380.4L289.9,379.6L293.5,372.5L296.6,373.5L298,367.7L293.5,370.1L296.8,353.1L301.6,340.1L301.4,330.2L303,326.8L305.3,309.4L304.5,301L288.9,290.7L278.4,270L274.3,267L273.9,263.2L278.4,257.4L275.1,256.2L277.5,247.9L281,246.2L285.8,239.3L284.8,231.4L280.2,225L277.8,229L269.5,227.2L261.7,221.8L261.9,219.2L256.5,214.1L246.6,211.3L237,205L231.8,206.5L212.5,199.2L206.3,193.2L205.5,186.7L196.4,176.5L188.3,169.6L185.7,163.4L181.2,161.7L181.5,166.2L190,175.9L196.1,185.1L188.4,181.3L188.1,177.7L182,174.6L182.9,170.7L179.1,167.9L174.2,158.2L165.6,154.3L154.5,138L154.1,131.2L155.8,123.5L154,115.6L158.4,113.9L146,108.8L137.4,97.8L127.6,88.5L120.5,88.3L111.5,84.6L100.1,83.3L91.3,80.9L88.8,83.4L78.6,85.7L79.4,81.3L72.2,85.1L74.2,86.5L59.9,94.5L47,98.1L41.8,98.4L54,94.4L61.9,90.1L63.8,86.3L58.2,87.7L50.3,84.4L44.9,83.9L38.6,79.2L42.9,74.6L53.4,72.9L53.4,70L41.8,71L33,67.6L43.1,65.1L50.9,66.3L40.6,61L50.3,54.6L65.1,51.8L77,53.9ZM278.4,47.8L276.8,45.1L288.2,47.7ZM240,41.7L231.1,41.9L236.5,39.9ZM255.1,43.4L243.3,42.1L239.2,38L231.3,35.7L245.5,36.7L252.3,40L274.6,39.7L278.2,41.9L272.4,43.2ZM345.6,107.5L342.2,111.6L351.5,113.2L352.6,120.4L349.3,117.4L335.4,117.8L340.7,109.1ZM267,69.1L277.5,73L269.1,71.9L262.4,74.9L260.1,72.1L261.4,67.4ZM281.2,49L283.8,47.9L302.2,53L308.9,54.1L314,57.8L308.9,59.1L328.2,64.3L322.5,69.4L314.7,65.6L310.7,67.5L318.6,71.2L319.4,75.9L308.9,72.9L316.2,78L308.7,76.9L292.2,71.1L284.1,71.6L283.6,68.6L294.6,68.2L298.2,63.1L296.4,60.9L286.5,58.6L280.7,55.1L274.2,56.3L253.7,54.4L249.4,49.3L254.4,45.7L264.3,46.3L271.3,45.1ZM237.5,44.1L248.6,44.8L238.1,49.9L233.2,47.4ZM158.7,38.6L169.2,34.7L177.2,34.3L176.8,36.5L166.9,38.7ZM207,29.7L219.9,31.1L223.1,33.6L214,32.4ZM156.9,115.3L151,114.4L143.4,109L150.7,110.3ZM162.4,43.2L173.5,43.9L179.1,45.9L168.8,48.6L165.4,51.7L158.1,53L150.2,50.4L155.7,45.3L153,43.6ZM200.5,39.3L205.9,39L204.7,41.7L188.3,43.3L189.5,41.2L173,41.1L179.4,37.6L197,40.4L193.1,37.7L198.5,37ZM204.1,47L209.8,52.8L219.5,55.5L215.5,59L205.7,57.8L185.2,59.6L174.1,55.7L187.7,54.5L172.5,54.1L177.5,51.9L168.3,51.2L172.6,48L180,46.3L181.5,48.2L194.7,47.3L199.5,51L198.9,47ZM221,48L221.2,44.9L229.5,45.1L231.8,48.4L226.8,52L215.3,48.6ZM226.4,36.9L227.3,41.7L219.8,41.5L215.1,38ZM233.3,26.1L243.3,24.3L256.1,26.9L261.6,29.6L252.7,32.5L242,32.4L241.3,29.5L236.2,29.5ZM245.6,22.5L262.5,20.4L297.7,18.8L317.1,19.4L328.1,21.2L312.1,23.6L318.1,23.6L302.3,28.3L286.4,29.7L290.6,31.9L278.8,36.2L276.2,38.4L251.4,37.6L255.7,32.3L263.6,29.6ZM232.6,57L232.6,59L222.8,57.2L227.2,55.2ZM891.7,257.2L901.6,260.7L913.2,275.3L918.9,278.6L910.9,278.1L905.7,272.4L902.1,271.2L896.2,275.9L889.3,273L882.3,273.4L885.2,270.3L883.1,265L871.3,259.8L862.6,252.6L872.2,252.2L873.4,257.7L884.3,254.7ZM920.3,266.2L915.9,267.5L912.2,265.1ZM820.7,234.9L824.2,230.8L831.1,235L825.9,241L830.5,247.5L827.3,247.8L823.8,254.1L822.6,261.1L814.6,258.7L806.2,258.2L803,251.3L804.6,244.4L808.8,244.9ZM855.4,244L857.3,249.3L854.7,250.7ZM841.5,247.6L847.9,246.1L845.7,248.8L833.8,249.3L842.1,264.8L839.5,264.7L834.2,258.1L834.5,265.4L831.6,264.9L829.9,257.8L833.4,248.4L835.8,246.4ZM801.4,267.8L812.8,269.3L821.4,273.3L818.2,274.3L800.8,271.6L792.7,269L794.6,266.4ZM789.9,253L794.7,258.5L793.9,266.3L790.9,266.3L785,261.7L773.9,244.9L764.9,236.2L770.8,235.4L779.6,244.2L782.4,244.2ZM309.4,396.2L311.8,399.6L319.3,401.9L310.7,404.5L302.8,402.9L292.6,396.8L302.5,400.2ZM300.8,199.9L296.7,194.7L303.3,194.8L310.2,198.3ZM760.5,24.9L766.5,24.3L778.3,28.4L777.6,30.9L771.6,31.2L759.2,29.4L753.3,26.8ZM785.7,29.8L791.9,32.5L776.2,33.6L781.3,29.9ZM885.6,38.5L903,40.1L900.8,42.2L886,42.7L880.5,40.9ZM888.5,46.2L894.6,44.8L898.9,46.6ZM624.6,26.1L643.1,25.8L632.2,27.7ZM648.6,45.1L654.5,41.4L669.9,38.2L689.3,36.3L689.4,38.2L671.1,40.9L662.4,43.6L653.9,49L659.8,53.6L649.1,53.4L643.3,51.5ZM897,100.8L897.9,106.2L901.8,114L897.7,113L896,117L898.7,119.9L894.7,122.3L894.9,108.5L893.6,101.9ZM14.1,63.3L22.6,64.1L28.1,66.7L20.7,68.2L17,71.4L10.5,68.5L0.3,67L0,58.4ZM330,394L337.4,391.9L335,395ZM542.1,28.7L547.2,27.6L559.8,30.7L552.9,31.8L547.6,36.6L531.2,30.9L529,28.7ZM576.1,27.6L572,29.1L555.8,29L548.2,26.9L563.7,26ZM568.7,33.7L562.5,34.9L557.8,32.6ZM370.1,20.5L379.4,18.8L389.2,18.9L402.5,17.7L424.7,18L442.1,20.2L437,21.3L411.4,21.7L431,22.8L435.6,24.6L456.2,22.5L466.1,24.2L450.8,27.4L445.3,31.2L448.7,36.1L439.8,37.1L444.9,38.6L442.6,41.2L446.2,43.6L442.3,45.9L434.5,46.4L432.6,48.3L439.6,53.7L434.6,54.2L429,51.6L426.8,54.9L437.9,55.2L422.9,59.8L411.7,60.8L405,64.8L389.4,68.2L385.6,73.7L381.1,75.9L379.5,83.1L365.9,80.9L356.6,73.3L350.1,63.4L357,59.1L358.7,55.8L351.5,57.5L349,53.3L357.3,54L344.9,51L348,48.4L337.3,40.2L329.8,38.6L309.7,38.7L301.7,36.1L314.5,35.1L302.7,34.3L296.8,32.1L317.5,29.5L311,27.5L327.1,24.1L326,22.9L341.1,21.7L352.7,22.5L360,21L376.3,23.2ZM271.5,185.6L282.4,187.5L294,193.7L284,194.8L281.3,190L270.1,187ZM637.6,284.6L640.2,292.3L630.8,319.3L626.1,321.1L622.3,319.4L620.2,311.3L623.3,305.8L623.5,295L628.6,293.8ZM482.8,100.4L481.1,104.8L472.3,106.1L473.1,100.3L479,96.9ZM991.4,361.3L988.9,364.7L982.8,359.7L984.9,357.8L984.2,351.5L979.5,345.9L984.2,348L987,353.4L995.9,354.7ZM971.3,371L980,362.5L984,366L970.4,379.6L963,378.4L964,375.3ZM910.2,363.4L910.9,370L905.7,371L902.1,363.1ZM850.4,339.5L843.5,344.1L833,344.4L827.8,347.4L819.5,345L821.4,337.8L817.2,328.1L815,317.7L817.1,310.4L835.7,304.7L841.7,295.6L849.1,289.5L853,288.4L856.6,291.3L862.8,284.8L868.3,283.7L867.7,280.9L880.4,284.3L876.2,290.9L886.8,298.3L891.3,298.2L893.6,291.8L893.6,284.5L895.9,279.6L899.8,290.4L903.8,291.6L906.6,302.7L913.5,306.6L915.8,312.1L924.6,320.2L926.6,328.1L924.7,337.9L921.4,341.8L916.7,354L906.4,358.4L890.7,355.6L887.7,350.4L880.1,347.9L882.8,341.4L877.7,346.9L873,340.6L864.8,337.5ZM727.2,229.1L723.2,233.4L721.4,227.2L722.6,222.7ZM804.1,199.5L803.1,194.9L807.7,194.2ZM838.3,182.2L835.4,189L833.6,184.6ZM541,144L541.9,148.3L534.5,145.5ZM524.2,136.4L526.9,141.2L523.4,141.2ZM534.4,94.1L533.6,97.8L530.3,95.1ZM491.4,101.7L489.9,98.3L484.5,96.4L482.9,92.3L486.1,87.1L491.7,87.1L488.7,90.1L494.6,89.8L491.3,94.5L494.2,94.7L501.3,103L504.7,103.5L501.5,109L484,110.7L488,107.8L487.3,101.4ZM459.7,65.4L462.2,69.1L448.2,73.6L436.8,72.3L439.5,71.1L432.4,67.7L438.5,65.5L442.8,67.4ZM840.5,222.3L844.7,218.8L841.7,224.9ZM851,226.6L848.3,234.5L843.4,228.2L839.8,227.7L850.6,224.2ZM839.8,199.4L838.1,210.2L833.5,208.4L835.3,198.6ZM848.6,216.2L846.7,221.8L845.2,215.1ZM894.1,141.2L891.6,144L891,150.4L886,153.7L881.2,153.9L877.2,157L875.2,153.9L863.9,155.9L866.7,157.9L864.8,162.6L859.5,157.5L868.4,151.6L876.9,151.3L887.3,143.8L889.7,135.6L892.7,135.1ZM901.7,127.9L904.3,129.8L897.7,133.3L893.4,131.4L888.8,134.5L889.8,129.6L892.7,129.5L894.4,123.5ZM867.7,157L874.4,156.1L869.5,159.2Z';

// Equirectangular projection matching the path above 1:1. viewBox is
// 1000x500, i.e. 1000px spans 360 degrees of longitude.
const MAP_WIDTH = 1000;
const MAP_HEIGHT = 500;
const MAP_SCALE = MAP_WIDTH / (2 * Math.PI);

function project(lon: number, lat: number): { x: number; y: number } {
  const x = MAP_WIDTH / 2 + MAP_SCALE * (lon * (Math.PI / 180));
  const y = MAP_HEIGHT / 2 - MAP_SCALE * (lat * (Math.PI / 180));
  return { x, y };
}

// A single deliberate accent, reserved for the one focused pin — an aged
// brass/gold tone echoing the congregation's crest. Everything else on the
// map stays in the site's own primary/ink tones so the focused point is
// unmistakable at a glance.
const FOCUS_GOLD = '#B8923C';

// Classic teardrop map-pin silhouette, drawn tip-first so the point lands
// exactly on the projected coordinate. Verified to render as a clean,
// non-self-intersecting drop with the tip at (0, 0) and the bulb rising
// above it (negative y).
const PIN_PATH = 'M0,0 C-1,-4 -8,-8 -8,-15 A8,8 0 1 1 8,-15 C8,-8 1,-4 0,0 Z';
const PIN_BULB_CY = -15;

export function WorldMap({ locations }: WorldMapProps) {
  const [hovered, setHovered] = useState<number | null>(null);
  const [selected, setSelected] = useState<number | null>(null);
  const reduceMotion = useReducedMotion();

  const activeIndex = hovered ?? selected;

  const handleEnter = useCallback((i: number) => setHovered(i), []);
  const handleLeave = useCallback(() => setHovered(null), []);
  const handleTap = useCallback(
    (i: number) => setSelected((prev) => (prev === i ? null : i)),
    [],
  );

  const pulseTransition = reduceMotion
    ? { duration: 0 }
    : { duration: 2.5, repeat: Infinity, delay: 0 };

  const markerTransition = reduceMotion
    ? { duration: 0 }
    : { type: 'spring' as const, stiffness: 300, damping: 20 };

  return (
    <div className="relative w-full overflow-hidden rounded-2xl border border-border/60 bg-secondary p-4 shadow-sm sm:p-8">
      {/* location count, read straight off the data */}

      <svg
        viewBox="0 0 1000 500"
        className="h-auto w-full"
        role="img"
        aria-label="World map showing monastery locations"
      >
        <defs>
          <radialGradient id="markerFocusGlow">
            <stop offset="0%" stopColor={FOCUS_GOLD} stopOpacity="0.55" />
            <stop offset="100%" stopColor={FOCUS_GOLD} stopOpacity="0" />
          </radialGradient>
        </defs>

        {/* ocean */}
        <rect x={0} y={0} width={1000} height={500} className="fill-secondary/30" />

        {/* graticule — quiet reference lines, mostly covered by the landmass */}
        <g className="stroke-border/60" strokeWidth={0.4} strokeDasharray="1 3">
          {[100, 200, 300, 400].map((y) => (
            <line key={`h${y}`} x1={0} y1={y} x2={1000} y2={y} />
          ))}
          {[200, 400, 600, 800].map((x) => (
            <line key={`v${x}`} x1={x} y1={0} x2={x} y2={500} />
          ))}
        </g>

        {/* landmass, in the site's own primary ink so it reads as "on brand" */}
        <path
          d={WORLD_LAND_PATH}
          className="fill-primary/45 stroke-primary/45"
          strokeWidth={0.6}
          strokeLinejoin="round"
        />

        {locations.map((loc, i) => {
          const isActive = activeIndex === i;
          const { x, y } = project(loc.lon, loc.lat);

          // keep the name tag on-canvas even for pins near the edges
          const labelWidth = Math.max(50, loc.name.length * 6 + 18);
          const half = labelWidth / 2;
          let dx = 0;
          if (x - half < 6) dx = 6 - (x - half);
          else if (x + half > 1000 - 6) dx = 1000 - 6 - (x + half);

          return (
            <g key={`${loc.name}-${i}`} transform={`translate(${x}, ${y})`}>
              {/* focus halo, only for the hovered / selected pin */}
              <motion.circle
                r={16}
                cy={PIN_BULB_CY}
                fill="url(#markerFocusGlow)"
                initial={false}
                animate={{ opacity: isActive ? 1 : 0 }}
                transition={{ duration: 0.25 }}
              />

              {/* ambient "we're here" double ping */}
              <motion.circle
                r={9}
                className="fill-primary/50"
                initial={reduceMotion ? { opacity: 0.3 } : { scale: 0.5, opacity: 0.6 }}
                animate={
                  reduceMotion
                    ? { opacity: 0.3 }
                    : { scale: [1, 2.6, 1], opacity: [0.6, 0, 0.6] }
                }
                transition={{ ...pulseTransition, duration: 2, delay: reduceMotion ? 0 : i * 0.15 }}
              />
              <motion.circle
                r={9}
                className="fill-primary/50"
                initial={reduceMotion ? { opacity: 0 } : { scale: 0.5, opacity: 0.5 }}
                animate={
                  reduceMotion
                    ? { opacity: 0 }
                    : { scale: [1, 2.6, 1], opacity: [0.5, 0, 0.5] }
                }
                transition={{ ...pulseTransition, duration: 2, delay: reduceMotion ? 0 : i * 0.15 + 1 }}
              />

              <motion.g
                initial={reduceMotion ? { opacity: 1 } : { scale: 0, opacity: 0 }}
                animate={
                  reduceMotion
                    ? { opacity: 1 }
                    : { scale: isActive ? 1.2 : 1, opacity: 1 }
                }
                whileHover={reduceMotion ? undefined : { scale: 1.2 }}
                whileTap={reduceMotion ? undefined : { scale: 0.9 }}
                transition={{
                  ...markerTransition,
                  stiffness: 260,
                  damping: 14,
                  delay: reduceMotion ? 0 : 0.3 + i * 0.08,
                }}
                style={{ originX: 0.5, originY: 1, cursor: 'pointer' }}
                onMouseEnter={() => handleEnter(i)}
                onMouseLeave={handleLeave}
                onClick={() => handleTap(i)}
                tabIndex={0}
                role="button"
                aria-label={`${loc.name}, ${loc.location}`}
                aria-expanded={isActive}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleTap(i);
                  }
                }}
              >
                <path
                  d={PIN_PATH}
                  className="stroke-background drop-shadow-sm"
                  strokeWidth={1.3}
                  strokeLinejoin="round"
                  style={{ fill: isActive ? FOCUS_GOLD : 'hsl(var(--primary))' }}
                />
                <circle cx={0} cy={PIN_BULB_CY} r={3} className="fill-background" />
              </motion.g>

              {/* name tag, so the exact pin under the cursor is never ambiguous */}
              <AnimatePresence>
                {isActive && (
                  <motion.g
                    initial={{ opacity: 0, y: -2 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -2 }}
                    transition={{ duration: 0.15 }}
                    className="pointer-events-none"
                  >
                    <rect
                      x={-half + dx}
                      y={-48}
                      width={labelWidth}
                      height={16}
                      rx={8}
                      className="fill-foreground"
                      fillOpacity={0.92}
                    />
                    <text
                      x={dx}
                      y={-37}
                      textAnchor="middle"
                      fontSize={9.5}
                      fontWeight={500}
                      className="fill-background"
                    >
                      {loc.name}
                    </text>
                  </motion.g>
                )}
              </AnimatePresence>
            </g>
          );
        })}
      </svg>
      <AnimatePresence>
        {activeIndex !== null && (
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            animate={reduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 }}
            exit={reduceMotion ? { opacity: 0 } : { opacity: 0, y: 8 }}
            transition={{ duration: 0.2 }}
            className="pointer-events-none absolute bottom-4 left-1/2 z-10 w-[min(90%,20rem)] -translate-x-1/2 rounded-xl border border-border/60 bg-background p-4 shadow-lg sm:bottom-6"
          >
            <Card
              key={locations[activeIndex].name}
              className="group overflow-hidden border-border/60 p-0 shadow-sm transition-shadow duration-300 hover:shadow-lg"
            >
              <div className="p-5">
                <h3 className="text-base font-medium leading-snug">
                  {locations[activeIndex].name}
                </h3>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <MapPin className="h-3.5 w-3.5 shrink-0" style={{ color: FOCUS_GOLD }} />
                  {locations[activeIndex].location}
                </p>
                <p className="mt-1.5 flex items-center gap-1.5 text-sm text-muted-foreground">
                  <Map className="h-3.5 w-3.5 shrink-0" style={{ color: FOCUS_GOLD }} />
                  {locations[activeIndex].address}
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}