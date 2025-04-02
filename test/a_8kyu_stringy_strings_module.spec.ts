import {assert} from 'chai'
import {stringy} from '../src/a_8kyu_stringy_strings_module'

const solutions = [
    [3, '101'],
    [5, '10101'],
    [12, '101010101010'],
    [26, '10101010101010101010101010'],
    [28, '1010101010101010101010101010'],
] as [number, string][]

describe('Test a_8kyu_stringy_strings_module', () => {
    solutions.forEach(([input, expected]: [number, string]) => {
        it(`Works with ${input}`, () => {
            assert.strictEqual(stringy(input), expected)
        })
    })
})