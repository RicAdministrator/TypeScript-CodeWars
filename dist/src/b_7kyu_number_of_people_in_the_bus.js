"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.number = void 0;
function number(busStops) {
    let passengersIn = busStops.map(function (v) { return v[0]; })
        .reduce(function (a, b) { return a + b; });
    let passengersOut = busStops.map(function (v) { return v[1]; })
        .reduce(function (a, b) { return a + b; });
    return passengersIn - passengersOut;
}
exports.number = number;
//# sourceMappingURL=b_7kyu_number_of_people_in_the_bus.js.map