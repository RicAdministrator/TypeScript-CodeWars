import { assert } from "chai";
import { addFive } from "../src/a_8kyu_grasshopper_basic_function_fixer";

describe("Test a_8kyu_grasshopper_basic_function_fixer", function () {
    it("Fixed tests", function () {
        assert.strictEqual(addFive(5), 10);
        assert.strictEqual(addFive(0), 5);
        assert.strictEqual(addFive(-5), 0);
    });
});