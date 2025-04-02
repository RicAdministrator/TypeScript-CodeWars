"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reverseWords = void 0;
function reverseWords(str) {
    let output = "";
    let tempStr = "";
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            output += tempStr + " ";
            tempStr = "";
        }
        else {
            tempStr = str.charAt(i) + tempStr;
        }
    }
    if (tempStr != "") {
        output += tempStr;
    }
    return output;
}
exports.reverseWords = reverseWords;
//# sourceMappingURL=b_7kyu_reverse_words.js.map