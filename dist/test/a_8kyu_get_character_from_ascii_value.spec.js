"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_get_character_from_ascii_value_1 = require("../src/a_8kyu_get_character_from_ascii_value");
describe("Test a_8kyu_get_character_from_ascii_value", () => {
    it("test", () => {
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(55), '7');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(56), '8');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(57), '9');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(58), ':');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(59), ';');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(60), '<');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(61), '=');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(62), '>');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(63), '?');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(64), '@');
        chai_1.assert.strictEqual((0, a_8kyu_get_character_from_ascii_value_1.getChar)(65), 'A');
    });
});
//# sourceMappingURL=a_8kyu_get_character_from_ascii_value.spec.js.map