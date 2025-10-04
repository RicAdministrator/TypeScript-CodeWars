"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_remove_string_spaces_1 = require("../src/a_8kyu_remove_string_spaces");
const chai_1 = require("chai");
describe('Test a_8kyu_remove_string_spaces', () => {
    it('basic tests', () => {
        chai_1.assert.equal((0, a_8kyu_remove_string_spaces_1.noSpace)('8 j 8   mBliB8g  imjB8B8  jl  B'), '8j8mBliB8gimjB8B8jlB');
        chai_1.assert.equal((0, a_8kyu_remove_string_spaces_1.noSpace)('8 8 Bi fk8h B 8 BB8B B B  B888 c hl8 BhB fd'), '88Bifk8hB8BB8BBBB888chl8BhBfd');
        chai_1.assert.equal((0, a_8kyu_remove_string_spaces_1.noSpace)('8aaaaa dddd r     '), '8aaaaaddddr');
        chai_1.assert.equal((0, a_8kyu_remove_string_spaces_1.noSpace)(''), '');
    });
});
//# sourceMappingURL=a_8kyu_remove_string_spaces.spec.js.map