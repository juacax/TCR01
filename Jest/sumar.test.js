const sumar = require('./sumar')

describe('Suma de números positivos', () => {
  describe('Suma de pares', () => {
    it('4 y 2', () => {
      expect(sumar(4, 2)).toBe(6)
    })

    it('test', () => {
      expect(sumar(8, 12)).toBe(20)
    })

    it('44 y 22', () => {
      expect(sumar(44, 22)).toBe(66)
    })
  })

  describe('Suma de impares', () => {
    it('Sumar 5 y 7', () => {
      expect(sumar(5, 7)).toBe(12)
    })

    it('Sumar 1 y 9', () => {
      expect(sumar(1, 9)).toBe(10)
    })

    test('Sumar 3 y 1', () => {
      expect(sumar(3, 1)).toBe(4)
    })
  })

  it('Sumar 3 y 8', () => {
    expect(sumar(3, 8)).toBe(11)
  })
})
