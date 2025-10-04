"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_opposites_attract_1 = require("../src/a_8kyu_opposites_attract");
test('Test a_8kyu_opposites_attract', () => {
    expect((0, a_8kyu_opposites_attract_1.lovefunc)(1, 4)).toBe(true);
    expect((0, a_8kyu_opposites_attract_1.lovefunc)(2, 2)).toBe(false);
    expect((0, a_8kyu_opposites_attract_1.lovefunc)(0, 1)).toBe(true);
    expect((0, a_8kyu_opposites_attract_1.lovefunc)(0, 0)).toBe(false);
});
//# sourceMappingURL=a_8kyu_opposites_attract.test.js.map