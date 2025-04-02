import { assert } from "chai";
import { greet } from "../src/a_8kyu_welcome";

describe("Tests", () => {
    it("test", () => {
        assert.strictEqual(greet('english'), 'Welcome', "Your function should have returned 'Welcome' for 'english'. Try again.");
        assert.strictEqual(greet('dutch'), 'Welkom', "Your function should have returned 'Welkom' for 'dutch'. Try again.");
        assert.strictEqual(greet('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome' for unknown language. Try again.");
    });
});