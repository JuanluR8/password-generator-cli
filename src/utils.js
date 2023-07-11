import { randomInt } from 'node:crypto'
import { CHARACTERS, SYMBOLS, NUMBERS } from './constants.js'

export const generatePassword = (length, pool) => {
    let password = "";
    for (let i = 0; i < length; i++) {
        password += pool.at(randomInt(0, pool.length))
    }
    return password;
}

export const buildPool = (options = {}) => {
    const { symbols, numbers } = options

    let pool = [
    ...CHARACTERS,
    ...CHARACTERS.map(s => s.toUpperCase())
    ]

    if (symbols) {
        pool = pool.concat(SYMBOLS)
    }

    if (numbers) {
        pool = pool.concat(NUMBERS)
    }

    return pool
}