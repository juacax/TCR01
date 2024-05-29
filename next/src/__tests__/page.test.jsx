import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Page from '../app/page'

test('Page', () => {
  render(<Page />)
  const listadoH2 = screen.getAllByRole('heading', { level: 2 })
  const h2Test = screen.getByRole('heading', { level: 2, name: 'Test' })
  expect(listadoH2.length).toBe(5)
  expect(h2Test).toBeDefined()
})
