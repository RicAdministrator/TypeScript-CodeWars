"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.basicOp = void 0;
function basicOp(operation, value1, value2) {
    let output = 0;
    switch (operation) {
        case '+':
            output = value1 + value2;
            break;
        case '-':
            output = value1 - value2;
            break;
        case '*':
            output = value1 * value2;
            break;
        case '/':
            output = value1 / value2;
            break;
    }
    return output;
}
exports.basicOp = basicOp;
//# sourceMappingURL=a_8kyu_basic_mathematical_operations.js.map