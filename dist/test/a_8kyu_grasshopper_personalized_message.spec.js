"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_grasshopper_personalized_message_1 = require("../src/a_8kyu_grasshopper_personalized_message");
describe("Test a_8kyu_grasshopper_personalized_message", () => {
    it("Fixed test", () => {
        chai_1.assert.strictEqual((0, a_8kyu_grasshopper_personalized_message_1.greet)('Daniel', 'Daniel'), 'Hello boss');
        chai_1.assert.strictEqual((0, a_8kyu_grasshopper_personalized_message_1.greet)('Greg', 'Daniel'), 'Hello guest');
    });
});
//# sourceMappingURL=a_8kyu_grasshopper_personalized_message.spec.js.map