import { basicOp } from "../src/a_8kyu_basic_mathematical_operations";
import { assert } from "chai";

describe('Test a_8kyu_basic_mathematical_operations', () => {
    it('basic tests', () => {
        assert.strictEqual(basicOp('+', 4, 7), 11);
        assert.strictEqual(basicOp('-', 15, 18), -3);
        assert.strictEqual(basicOp('*', 5, 5), 25);
        assert.strictEqual(basicOp('/', 49, 7), 7);
    })
})