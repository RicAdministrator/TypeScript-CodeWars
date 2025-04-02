"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lovefunc = void 0;
function lovefunc(flower1, flower2) {
    if (flower1 === 0)
        flower1 = 2;
    if (flower2 === 0)
        flower2 = 2;
    return (flower1 % 2 === 0 && flower2 % 2 != 0) || (flower2 % 2 === 0 && flower1 % 2 != 0);
}
exports.lovefunc = lovefunc;
//# sourceMappingURL=a_8kyu_opposites_attract.js.map