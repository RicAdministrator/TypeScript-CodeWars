"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitize = void 0;
const digitize = (n) => {
    let numbers = ("" + n).split("").map(function (item) {
        return parseInt(item, 10);
    });
    return numbers.reverse();
};
exports.digitize = digitize;
//# sourceMappingURL=a_8kyu_convert_number_to_reversed_array_of_digits.js.map