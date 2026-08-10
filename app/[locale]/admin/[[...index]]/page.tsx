'use client'

import { useIntl } from 'react-intl'
import { Studio } from 'sanity'
import config from '../../../../sanity.config'

export default function AdminPage() {
  return (
    <div className="h-screen">
      <Studio config={config} />
    </div>
  )
}
