"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toAlternatingCase = void 0;
function toAlternatingCase(s) {
    let output = "";
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i).match(/[a-zA-Z]/i)) {
            if (s.charAt(i) == s.charAt(i).toLocaleLowerCase()) {
                output += s.charAt(i).toUpperCase();
            }
            else {
                output += s.charAt(i).toLowerCase();
            }
        }
        else {
            output += s.charAt(i);
        }
    }
    return output;
}
exports.toAlternatingCase = toAlternatingCase;
//# sourceMappingURL=a_8kyu_alternating_case.js.map