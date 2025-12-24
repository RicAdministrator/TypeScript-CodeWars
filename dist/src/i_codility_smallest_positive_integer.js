"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(A) {
    let result = 1;
    let smallestPositive = 1;
    let largestPositive = 1;
    const positiveNumbers = A.filter(num => num > 0);
    if (positiveNumbers.length !== 0) {
        smallestPositive = Math.min(...positiveNumbers);
        largestPositive = Math.max(...positiveNumbers);
    }
    for (let i = smallestPositive; i <= largestPositive; i++) {
        if (!positiveNumbers.includes(i)) {
            result = i;
        }
    }
    if (result === 1 && positiveNumbers.length !== 0) {
        result = largestPositive + 1;
    }
    return result;
}
exports.solution = solution;
//# sourceMappingURL=i_codility_smallest_positive_integer.js.map