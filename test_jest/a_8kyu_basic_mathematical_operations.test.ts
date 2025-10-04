import { basicOp } from "../src/a_8kyu_basic_mathematical_operations";

test('Test a_8kyu_basic_mathematical_operations', () => {
    expect(basicOp('+', 4, 7)).toBe(11);
    expect(basicOp('-', 15, 18)).toBe(-3);
    expect(basicOp('*', 5, 5)).toBe(25);
    expect(basicOp('/', 49, 7)).toBe(7);
});