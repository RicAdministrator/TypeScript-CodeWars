"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string_1 = require("../src/a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string");
const chai_1 = require("chai");
describe("Test a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string", function () {
    it("It should works for basic tests", function () {
        chai_1.assert.strictEqual((0, a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string_1.remove)("Hi!"), "Hi");
        chai_1.assert.strictEqual((0, a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string_1.remove)("Hi!!!"), "Hi!!");
        chai_1.assert.strictEqual((0, a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string_1.remove)("!Hi"), "!Hi");
        chai_1.assert.strictEqual((0, a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string_1.remove)("!Hi!"), "!Hi");
        chai_1.assert.strictEqual((0, a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string_1.remove)("Hi! Hi!"), "Hi! Hi");
        chai_1.assert.strictEqual((0, a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string_1.remove)("Hi"), "Hi");
    });
});
//# sourceMappingURL=a_8kyu_exclamation_marks_series_1_remove_an_exclamation_mark_from_the_end_of_string.spec.js.map