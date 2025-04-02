"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.positiveSum = void 0;
function positiveSum(arr) {
    return arr.filter((obj) => obj > 0).reduce((sum, current) => sum + current, 0);
}
exports.positiveSum = positiveSum;
//# sourceMappingURL=a_8kyu_sum_of_positive.js.map