"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumArray = void 0;
function sumArray(array) {
    let output = 0;
    if (array && array.length > 1) {
        const sum = array.reduce((partialSum, a) => partialSum + a, 0);
        const max = Math.max(...array);
        const min = Math.min(...array);
        output = sum - max - min;
    }
    return output;
}
exports.sumArray = sumArray;
//# sourceMappingURL=a_8kyu_sum_without_highest_and_lowest_number.js.map