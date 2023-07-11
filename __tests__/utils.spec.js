import { describe, expect, it } from 'vitest';
import { buildPool, generatePassword } from "@/utils"

describe('--- buildPool ---', () => {
  const ALPHA = 'a'
  const NUMBER = '5'
  const SYMBOL = '$'

  it('should return array with alpha characters', () => {
    const result = buildPool()

    expect(result).toContain(ALPHA)
    expect(result).not.toContain(NUMBER)
    expect(result).not.toContain(SYMBOL)
  })

  it('should build characters pool including numbers', () => {
    const result = buildPool({ numbers: true })

    expect(result).toContain(ALPHA)
    expect(result).toContain(NUMBER)
    expect(result).not.toContain(SYMBOL)
  })

  it('should build characters pool including symbols', () => {
    const result = buildPool({ symbols: true })

    expect(result).toContain(ALPHA)
    expect(result).not.toContain(NUMBER)
    expect(result).toContain(SYMBOL)
  })

  it('should build characters pool including numbers and symbols', () => {
    const result = buildPool({ numbers: true, symbols: true })

    expect(result).toContain(ALPHA)
    expect(result).toContain(NUMBER)
    expect(result).toContain(SYMBOL)
  })
})

describe('--- generatePassword ---', () => {
  const MOCK_POOL = [...'aeiou12345']
  const LEN = 10

  it('should return an string with provided length', () => {
    const result = generatePassword(LEN, MOCK_POOL)

    expect(result).toHaveLength(LEN)
  })

  it('should generate password with all characters contained in pool', () => {
    const [...result] = generatePassword(LEN, MOCK_POOL)

    // result.forEach(c => {
    //   expect(MOCK_POOL).toContain(c)
    // })
    expect(MOCK_POOL).toEqual(expect.arrayContaining(result));
  })
})