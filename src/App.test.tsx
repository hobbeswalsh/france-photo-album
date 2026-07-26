import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, test } from 'vitest'
import App from './App'
import { byName, photos } from './photos'

// RTL only auto-registers cleanup when vitest `globals` is on; we use explicit imports.
afterEach(cleanup)

test('discovers every photo in src/photos, in album order', () => {
  expect(photos.length).toBe(13)
  expect(photos[0].name).toBe('france-trip-01.webp')
  expect(photos.at(-1)?.name).toBe('france-trip-13.webp')
})

test('opens on the first photo', () => {
  render(<App />)
  expect(screen.getByRole('img').getAttribute('src')).toBe(byName['france-trip-01.webp'].url)
})

test('clicking a narrative term swaps the photo and describes it', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: 'the beach below it' }))

  const img = screen.getByRole('img')
  expect(img.getAttribute('src')).toBe(byName['france-trip-02.webp'].url)
  expect(img.getAttribute('alt')).toBe('the beach below it')
})
