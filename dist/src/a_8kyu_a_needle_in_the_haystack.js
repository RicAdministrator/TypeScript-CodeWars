"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNeedle = void 0;
function findNeedle(haystack) {
    let returnVal = "needle not found";
    haystack.forEach(function (value, index) {
        if (value && (typeof value === 'string' || value instanceof String) && value.toString() === "needle")
            returnVal = "found the needle at position " + index.toString();
    });
    return returnVal;
}
exports.findNeedle = findNeedle;
//# sourceMappingURL=a_8kyu_a_needle_in_the_haystack.js.map