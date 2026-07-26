import { cleanup, render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { afterEach, expect, test } from 'vitest'
import App from './App'
import { photos } from './photos'

// RTL only auto-registers cleanup when vitest `globals` is on; we use explicit imports.
afterEach(cleanup)

test('discovers every photo in src/photos, in album order', () => {
  expect(photos.length).toBe(13)
  expect(photos[0].name).toBe('france-trip-01.webp')
  expect(photos.at(-1)?.name).toBe('france-trip-13.webp')
})

test('renders the first photo', () => {
  render(<App />)
  expect(screen.getByRole('heading', { level: 1 }).textContent).toBe('France Album')
  expect(screen.getByText(`1 / ${photos.length}`)).toBeDefined()
})

test('next and previous wrap around the album', async () => {
  const user = userEvent.setup()
  render(<App />)

  await user.click(screen.getByRole('button', { name: 'Next photo' }))
  expect(screen.getByText(`2 / ${photos.length}`)).toBeDefined()

  await user.click(screen.getByRole('button', { name: 'Previous photo' }))
  await user.click(screen.getByRole('button', { name: 'Previous photo' }))
  expect(screen.getByText(`${photos.length} / ${photos.length}`)).toBeDefined()
})
