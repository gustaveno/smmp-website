'use client'

import Link from 'next/link'
import { useIntl } from 'react-intl'
import { Mail, Phone, MapPin } from 'lucide-react'
import { SiFacebook, SiInstagram, SiYoutube } from '@icons-pack/react-simple-icons';
import { type Locale } from '@/lib/i18n'

type FooterProps = {
  locale: Locale
}

export default function Footer({ locale }: FooterProps) {
  const intl = useIntl()
  const currentYear = 2026

  return (
    <footer className="border-t border-border bg-muted">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Congregation</h3>
            <p className="text-sm text-muted-foreground">
              A faith community dedicated to spiritual growth and service.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-base mb-4">{intl.formatMessage({ id: 'footer.quickLinks', defaultMessage: 'Quick Links' })}</h4>
            <ul className="space-y-2 text-sm">
              {['events', 'sermons', 'news', 'schedule'].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${locale}/${item}`}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.charAt(0).toUpperCase() + item.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-base mb-4">{intl.formatMessage({ id: 'footer.contact', defaultMessage: 'Contact' })}</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Mail className="w-4 h-4" />
                <span>contact@congregation.org</span>
              </li>
              <li className="flex items-center space-x-2 text-muted-foreground">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-start space-x-2 text-muted-foreground">
                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                <span>123 Church Street<br />City, State 12345</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-4 text-base font-semibold">Follow Us</h4>
            <div className="flex flex-wrap gap-3">
              {[
                { label: 'Instagram', href: 'https://instagram.com/instagram', Icon: SiInstagram },
                { label: 'YouTube', href: 'https://youtube.com/', Icon: SiYoutube },
                { label: 'Facebook', href: 'https://facebook.com/facebook', Icon: SiFacebook },
              ].map(({ label, href, Icon }) => (
                <Link
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={`Visit our ${label} profile`}
                  className="inline-flex size-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:bg-background hover:text-foreground"
                >
                  <Icon aria-hidden="true" />
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between text-sm text-muted-foreground">
            <p>
              © {currentYear} Congregation {' • '} All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
