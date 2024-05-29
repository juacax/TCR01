const strToFloat = require('./helper')

describe('Test de strToFloat', () => {
  test('Convertimos 10.55', () => {
    expect(strToFloat('10.55')).toBe(10.55)
  })

  test('Convertimos 99.99', () => {
    expect(strToFloat('99.99')).toBe(99.99)
  })

  test('Convertimos 99,99', () => {
    expect(strToFloat('99,99')).toBe(99.99)
  })

  test('Convertimos 9.999,99', () => {
    expect(strToFloat('9.999,99')).toBe(9999.99)
  })

  test('Convertimos $9.999,99', () => {
    expect(strToFloat('$9.999,99')).toBe(9999.99)
  })

  test('Convertimos 9.999,99$', () => {
    expect(strToFloat('9.999,99$')).toBe(9999.99)
  })
})
