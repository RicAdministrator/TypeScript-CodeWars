"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rentalCarCost = void 0;
function rentalCarCost(d) {
    let output = 0;
    if (d > 0 && d < 3) {
        output = d * 40;
    }
    else if (d < 7) {
        output = (d * 40) - 20;
    }
    else {
        output = (d * 40) - 50;
    }
    return output;
}
exports.rentalCarCost = rentalCarCost;
//# sourceMappingURL=a_8kyu_transportation_on_vacation.js.map