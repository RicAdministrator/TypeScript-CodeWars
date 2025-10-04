"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fakeBin = void 0;
const fakeBin = (x) => {
    let output = "";
    for (let i = 0; i < x.length; i++) {
        output += +x.charAt(i) < 5 ? "0" : "1";
    }
    return output;
};
exports.fakeBin = fakeBin;
//# sourceMappingURL=a_8kyu_fake_binary.js.map