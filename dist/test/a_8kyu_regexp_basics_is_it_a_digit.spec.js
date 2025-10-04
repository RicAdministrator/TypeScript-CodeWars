"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("../src/a_8kyu_regexp_basics_is_it_a_digit");
const chai_1 = require("chai");
describe('Test a_8kyu_regexp_basics_is_it_a_digit', () => {
    it('Basic tests', () => {
        chai_1.assert.strictEqual(''.digit(), false);
        chai_1.assert.strictEqual('7'.digit(), true);
        chai_1.assert.strictEqual(' '.digit(), false);
        chai_1.assert.strictEqual('a'.digit(), false);
        chai_1.assert.strictEqual('a5'.digit(), false);
        chai_1.assert.strictEqual('14'.digit(), false);
    });
});
//# sourceMappingURL=a_8kyu_regexp_basics_is_it_a_digit.spec.js.map