import { xor } from '../src/a_8kyu_exclusive_or_xor_logical_operator'

test('Test a_8kyu_exclusive_or_xor_logical_operator', () => {
    expect(xor(false, false)).toBe(false); // false xor false === false
    expect(xor(true, false)).toBe(true);   // true xor false === true
    expect(xor(false, true)).toBe(true);   // false xor true === true
    expect(xor(true, true)).toBe(false);   // true xor true === false
    expect(xor(true, true)).not.toBe(true); // 'xor' is NOT identical to 'or'
});
