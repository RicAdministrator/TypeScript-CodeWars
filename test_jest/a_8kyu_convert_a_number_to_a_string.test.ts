import { numberToString } from '../src/a_8kyu_convert_a_number_to_a_string';

test('Test a_8kyu_convert_a_number_to_a_string', () => {
    expect(numberToString(67)).toBe('67');
    expect(numberToString(79585)).toBe('79585');
    expect(numberToString(0)).toBe('0');
});