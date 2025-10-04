"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_remove_first_and_last_character_1 = require("../src/a_8kyu_remove_first_and_last_character");
const chai_1 = require("chai");
describe('Test a_8kyu_remove_first_and_last_character', () => {
    it('basic tests', () => {
        chai_1.assert.equal((0, a_8kyu_remove_first_and_last_character_1.removeChar)('eloquent'), 'loquen');
        chai_1.assert.equal((0, a_8kyu_remove_first_and_last_character_1.removeChar)('country'), 'ountr');
        chai_1.assert.equal((0, a_8kyu_remove_first_and_last_character_1.removeChar)('person'), 'erso');
        chai_1.assert.equal((0, a_8kyu_remove_first_and_last_character_1.removeChar)('place'), 'lac');
        chai_1.assert.equal((0, a_8kyu_remove_first_and_last_character_1.removeChar)('ok'), '');
    });
});
//# sourceMappingURL=a_8kyu_remove_first_and_last_character.spec.js.map