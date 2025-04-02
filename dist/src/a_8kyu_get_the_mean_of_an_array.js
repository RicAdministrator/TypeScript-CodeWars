"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAverage = void 0;
function getAverage(marks) {
    let sum = 0;
    marks.forEach(function (value) {
        sum += value;
    });
    return Math.floor(sum / marks.length);
}
exports.getAverage = getAverage;
//# sourceMappingURL=a_8kyu_get_the_mean_of_an_array.js.map