"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.squareOrSquareRoot = void 0;
function squareOrSquareRoot(array) {
    let output = [];
    let sqrt = 0;
    array.forEach(function (value) {
        sqrt = Math.sqrt(value);
        output.push(sqrt % 1 === 0 ? sqrt : value * value);
    });
    return output;
}
exports.squareOrSquareRoot = squareOrSquareRoot;
//# sourceMappingURL=a_8kyu_to_squareroot_or_not_to_squareroot.js.map