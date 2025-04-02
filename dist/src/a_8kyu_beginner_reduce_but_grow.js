"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.grow = void 0;
function grow(arr) {
    let output = 1;
    arr.forEach(function (value) {
        output *= value;
    });
    return output;
}
exports.grow = grow;
//# sourceMappingURL=a_8kyu_beginner_reduce_but_grow.js.map