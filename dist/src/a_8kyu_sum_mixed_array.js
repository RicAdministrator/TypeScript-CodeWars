"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sumMix = void 0;
function sumMix(x) {
    let output = 0;
    x.forEach(function (value) {
        if (typeof value === 'number') {
            output += value;
        }
        else {
            output += parseInt(value);
        }
    });
    return output;
}
exports.sumMix = sumMix;
//# sourceMappingURL=a_8kyu_sum_mixed_array.js.map