import { lovefunc } from "../src/a_8kyu_opposites_attract";

test('Test a_8kyu_opposites_attract', () => {
    expect(lovefunc(1, 4)).toBe(true);
    expect(lovefunc(2, 2)).toBe(false);
    expect(lovefunc(0, 1)).toBe(true);
    expect(lovefunc(0, 0)).toBe(false);
});