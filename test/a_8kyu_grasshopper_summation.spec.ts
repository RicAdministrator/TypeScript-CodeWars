import { assert } from "chai";
import { summation } from "../src/a_8kyu_grasshopper_summation"

describe('Test a_8kyu_grasshopper_summation', () => {
    it('basic tests', () => {
        assert.equal(summation(1), 1)
        assert.equal(summation(8), 36)
    })
})
