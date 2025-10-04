import { toAlternatingCase } from '../src/a_8kyu_alternating_case';

test('Test a_8kyu_alternating_case', () => {
    expect(toAlternatingCase("hello world")).toBe("HELLO WORLD");
    expect(toAlternatingCase("HeLLo WoRLD")).toBe("hEllO wOrld");
    expect(toAlternatingCase("1a2b3c4d5e")).toBe("1A2B3C4D5E");
});