"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const a_8kyu_transportation_on_vacation_1 = require("../src/a_8kyu_transportation_on_vacation");
describe("Test a_8kyu_transportation_on_vacation", () => {
    it("Should work for under 3 days:", () => {
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(1), 40);
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(2), 80);
    });
    it("Should work for under 7 days:", () => {
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(3), 100);
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(4), 140);
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(5), 180);
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(6), 220);
    });
    it("Should work for 7 or more days:", () => {
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(7), 230);
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(8), 270);
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(9), 310);
        chai_1.assert.strictEqual((0, a_8kyu_transportation_on_vacation_1.rentalCarCost)(10), 350);
    });
});
//# sourceMappingURL=a_8kyu_transportation_on_vacation.spec.js.map