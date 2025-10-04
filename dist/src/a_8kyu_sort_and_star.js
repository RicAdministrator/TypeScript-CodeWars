"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.twoSort = void 0;
function twoSort(s) {
    let firstVal = s.sort()[0];
    let output = "";
    for (let i = 0; i < firstVal.length; i++) {
        output += firstVal.charAt(i);
        if (i < firstVal.length - 1) {
            output += "***";
        }
    }
    return output;
}
exports.twoSort = twoSort;
//# sourceMappingURL=a_8kyu_sort_and_star.js.map