"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_welcome_1 = require("../src/a_8kyu_welcome");
describe("Tests", () => {
    it("test", () => {
        chai_1.assert.strictEqual((0, a_8kyu_welcome_1.greet)('english'), 'Welcome', "Your function should have returned 'Welcome' for 'english'. Try again.");
        chai_1.assert.strictEqual((0, a_8kyu_welcome_1.greet)('dutch'), 'Welkom', "Your function should have returned 'Welkom' for 'dutch'. Try again.");
        chai_1.assert.strictEqual((0, a_8kyu_welcome_1.greet)('IP_ADDRESS_INVALID'), 'Welcome', "Your function should have returned 'Welcome' for unknown language. Try again.");
    });
});
//# sourceMappingURL=a_8kyu_welcome.spec.js.map