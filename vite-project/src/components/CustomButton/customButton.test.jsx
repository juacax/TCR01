import { fireEvent, render, screen } from '@testing-library/react'
import { CustomButton } from '.'

describe('Pruebas CustomButton', () => {
  it('Prueba propiedad text', () => {
    render(<CustomButton text="Apretame" />)
    const customButton = screen.getByRole('button')
    expect(customButton).toHaveTextContent('Apretame')
  })

  it('Prueba valor default propiedad text', () => {
    render(<CustomButton />)
    const customButton = screen.getByRole('button')
    expect(customButton).toHaveTextContent('Click Here')
  })

  it('Prueba click ', () => {
    render(<CustomButton />)
    const customButton = screen.getByRole('button')
    const p = screen.getByRole('paragraph')
    expect(p).toHaveTextContent('0')
    fireEvent.click(customButton)
    expect(p).toHaveTextContent('1')
  })
})
