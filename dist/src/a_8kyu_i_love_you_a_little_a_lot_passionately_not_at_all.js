"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.howMuchILoveYou = void 0;
function howMuchILoveYou(petals) {
    let output = "I love you";
    for (let x = 2; x <= petals; x++) {
        switch (output) {
            case "I love you":
                output = "a little";
                break;
            case "a little":
                output = "a lot";
                break;
            case "a lot":
                output = "passionately";
                break;
            case "passionately":
                output = "madly";
                break;
            case "madly":
                output = "not at all";
                break;
            case "not at all":
                output = "I love you";
                break;
        }
    }
    return output;
}
exports.howMuchILoveYou = howMuchILoveYou;
//# sourceMappingURL=a_8kyu_i_love_you_a_little_a_lot_passionately_not_at_all.js.map