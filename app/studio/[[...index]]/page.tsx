'use client'

import { Studio } from 'sanity'
import config from '../../../sanity.config'

export default function StudioPage() {
  return (
    <div className="h-screen">
      <Studio config={config} />
    </div>
  )
}
