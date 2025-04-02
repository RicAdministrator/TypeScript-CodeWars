import { assert } from "chai";
import { greet } from "../src/a_8kyu_grasshopper_personalized_message";

describe("Test a_8kyu_grasshopper_personalized_message", () => {
    it("Fixed test", () => {
        assert.strictEqual(greet('Daniel', 'Daniel'), 'Hello boss')
        assert.strictEqual(greet('Greg', 'Daniel'), 'Hello guest')
    });
});