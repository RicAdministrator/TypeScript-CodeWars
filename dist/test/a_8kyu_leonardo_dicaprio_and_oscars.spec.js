"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_leonardo_dicaprio_and_oscars_module_1 = require("../src/a_8kyu_leonardo_dicaprio_and_oscars_module");
describe("Test a_8kyu_leonardo_dicaprio_and_oscars_module", function () {
    it("test", function () {
        chai_1.assert.strictEqual((0, a_8kyu_leonardo_dicaprio_and_oscars_module_1.leo)(89), "Leo got one already!");
        chai_1.assert.strictEqual((0, a_8kyu_leonardo_dicaprio_and_oscars_module_1.leo)(88), "Leo finally won the oscar! Leo is happy");
        chai_1.assert.strictEqual((0, a_8kyu_leonardo_dicaprio_and_oscars_module_1.leo)(87), "When will you give Leo an Oscar?");
        chai_1.assert.strictEqual((0, a_8kyu_leonardo_dicaprio_and_oscars_module_1.leo)(86), "Not even for Wolf of wallstreet?!");
    });
});
//# sourceMappingURL=a_8kyu_leonardo_dicaprio_and_oscars.spec.js.map