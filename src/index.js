#!/usr/bin/env node

import yargs from 'yargs'
import clipboard from 'clipboardy'
import chalk from 'chalk'

import { buildPool, generatePassword } from './utils.js'
import { MAX_LEN, MIN_LEN } from './constants.js'

const args = yargs(process.argv.slice(2))
    .scriptName('generate-password')
    .alias({ h: 'help', v: 'version' })
    .version()
    .usage('$0 [options]')
    .options({
        len: {
            alias: 'l',
            default: 8,
            type: 'number',
            description: 'Password length',
        },
        symbols: {
            alias: 's',
            default: false,
            description: 'Use symbols in password',
            type: 'boolean',
        },
        numbers: {
            alias: 'n',
            default: false,
            description: 'Use numbers in password',
            type: 'boolean',
        }
    })
    .check((argv) => {
        if (argv.len >= MIN_LEN && argv.len <= MAX_LEN) {
            return true
        } else {
            throw new Error(`Length should be between ${MIN_LEN} and ${MAX_LEN}`)
        }
    })
    .fail(function (msg, _err, yargs) {
        console.error(chalk.red(msg))
        console.error('\nYou should be doing\n', yargs.help())
        process.exit(1)
      })
    .parse()

const { len, ...options } = args

const pool = buildPool(options)
const password = generatePassword(len, pool)

clipboard.writeSync(password)
   
console.log(password);
console.log(chalk.green('Password coppied to clipboard'))

process.exit(0)