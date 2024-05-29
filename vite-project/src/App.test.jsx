import { render, screen, fireEvent } from '@testing-library/react'
import App from './App'

beforeEach(() => {
  render(<App />)
})

describe('Pruebas de App', () => {
  it('primer test con React', () => {
    // Capta el elemento button siempre y cuando sea el único
    // const button = screen.getByRole('button')
    //const btnId = screen.getByTestId('btn1') //Capta el boton con testid btn1
    const botones = screen.getAllByRole('button') //Capta todos los elementos button

    botones.forEach((btn) => {
      fireEvent.click(btn)
    })

    expect(screen.getByText('count is 2')).toBeInTheDocument()
  })

  it('Prueba de Integración', () => {
    const p = screen.getByTestId('p-customButton')
    expect(p).toHaveTextContent('0')
  })
})

test('primer test con React', () => {
  //render(<App />)
  // Capta el elemento button siempre y cuando sea el único
  // const button = screen.getByRole('button')
  //const btnId = screen.getByTestId('btn1') //Capta el boton con testid btn1
  const botones = screen.getAllByRole('button') //Capta todos los elementos button

  botones.forEach((btn) => {
    fireEvent.click(btn)
  })

  expect(screen.getByText('count is 2')).toBeInTheDocument()
})

test('Prueba de Integración', () => {
  //render(<App />)

  const p = screen.getByTestId('p-customButton')
  expect(p).toHaveTextContent('0')
})
