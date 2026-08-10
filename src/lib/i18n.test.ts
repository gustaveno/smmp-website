import test from 'node:test'
import assert from 'node:assert/strict'
import { flattenMessages, getLocaleFromPathname } from './i18n'

test('extracts locale from localized pathname', () => {
  assert.equal(getLocaleFromPathname('/en/contact'), 'en')
  assert.equal(getLocaleFromPathname('/fr/public/events'), 'fr')
})

test('falls back to the default locale when no locale is present', () => {
  assert.equal(getLocaleFromPathname('/contact'), 'id')
  assert.equal(getLocaleFromPathname('/unknown/page'), 'id')
})

test('flattens nested message objects for react-intl', () => {
  const nested = {
    common: {
      navigation: {
        events: 'Events',
      },
    },
  }

  assert.deepEqual(flattenMessages(nested), {
    'common.navigation.events': 'Events',
  })
})
