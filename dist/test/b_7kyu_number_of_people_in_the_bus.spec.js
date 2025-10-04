"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const b_7kyu_number_of_people_in_the_bus_1 = require("../src/b_7kyu_number_of_people_in_the_bus");
const chai_1 = require("chai");
describe('Test b_7kyu_number_of_people_in_the_bus', () => {
    it('basic tests', () => {
        chai_1.assert.equal((0, b_7kyu_number_of_people_in_the_bus_1.number)([[10, 0], [3, 5], [5, 8]]), 5);
        chai_1.assert.equal((0, b_7kyu_number_of_people_in_the_bus_1.number)([[3, 0], [9, 1], [4, 10], [12, 2], [6, 1], [7, 10]]), 17);
        chai_1.assert.equal((0, b_7kyu_number_of_people_in_the_bus_1.number)([[3, 0], [9, 1], [4, 8], [12, 2], [6, 1], [7, 8]]), 21);
        chai_1.assert.equal((0, b_7kyu_number_of_people_in_the_bus_1.number)([[0, 0]]), 0);
    });
});
//# sourceMappingURL=b_7kyu_number_of_people_in_the_bus.spec.js.map