"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_a_needle_in_the_haystack_1 = require("../src/a_8kyu_a_needle_in_the_haystack");
const chai_1 = require("chai");
describe('Test a_8kyu_a_needle_in_the_haystack', () => {
    it('basic tests', () => {
        chai_1.assert.strictEqual((0, a_8kyu_a_needle_in_the_haystack_1.findNeedle)(['3', '123124234', null, 'needle', 'world', 'hay', 2, '3', true, false]), 'found the needle at position 3');
        chai_1.assert.strictEqual((0, a_8kyu_a_needle_in_the_haystack_1.findNeedle)(['283497238987234', 'a dog', 'a cat', 'some random junk', 'a piece of hay', 'needle', 'something somebody lost a while ago']), 'found the needle at position 5');
        chai_1.assert.strictEqual((0, a_8kyu_a_needle_in_the_haystack_1.findNeedle)([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 'needle', 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]), 'found the needle at position 30');
        chai_1.assert.strictEqual((0, a_8kyu_a_needle_in_the_haystack_1.findNeedle)(['needle', 1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54]), 'found the needle at position 0');
        chai_1.assert.strictEqual((0, a_8kyu_a_needle_in_the_haystack_1.findNeedle)([1, 2, 3, 4, 5, 6, 7, 8, 8, 7, 5, 4, 3, 4, 5, 6, 67, 5, 5, 3, 3, 4, 2, 34, 234, 23, 4, 234, 324, 324, 1, 2, 3, 4, 5, 5, 6, 5, 4, 32, 3, 45, 54, 'needle']), 'found the needle at position 43');
        chai_1.assert.strictEqual((0, a_8kyu_a_needle_in_the_haystack_1.findNeedle)(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"]), 'found the needle at position 5');
    });
});
//# sourceMappingURL=a_8kyu_a_needle_in_the_haystack.spec.js.map