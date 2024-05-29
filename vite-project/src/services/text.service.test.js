// No es necesario importar ya que utilizamos vitest
//import { expect, describe, it } from 'vitest'
import { emailValid } from './text.service'

describe('Correos inválidos', () => {
  it('check j.@j.com', () => {
    expect(emailValid('j.@j.com')).toBe(false)
  })

  it('check .j@j.com', () => {
    expect(emailValid('.j@j.com')).toBe(false)
  })

  it('check j@j.com@', () => {
    expect(emailValid('j@j.com@')).toBe(false)
  })

  it('check j@j.com.', () => {
    expect(emailValid('j@j.com.')).toBe(false)
  })

  it('check @j.com', () => {
    expect(emailValid('@j.com')).toBe(false)
  })
})

describe('Correos válidos', () => {
  it('check j@j.com', () => {
    expect(emailValid('j@j.com')).toBe(true)
  })
})
