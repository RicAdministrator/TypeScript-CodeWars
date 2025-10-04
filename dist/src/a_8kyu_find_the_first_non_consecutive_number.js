"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.firstNonConsecutive = void 0;
function firstNonConsecutive(arr) {
    let output = 0;
    for (let x = 0; x < arr.length; x++) {
        if (x + 1 == arr.length)
            return null;
        if (arr[x + 1] != arr[x] + 1) {
            output = arr[x + 1];
            break;
        }
    }
    return output;
}
exports.firstNonConsecutive = firstNonConsecutive;
//# sourceMappingURL=a_8kyu_find_the_first_non_consecutive_number.js.map