"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.snail = void 0;
function snail(array) {
    let output = [];
    let counter1 = 0;
    let counter2 = array[0].length - 1;
    let counter3 = 1;
    let counter4 = array[0].length - 2;
    let outputIndex = 0;
    do {
        for (let a = counter1; a <= counter2; a++) {
            output[outputIndex] = array[counter1][a];
            outputIndex++;
        }
        for (let a = counter3; a <= counter2; a++) {
            output[outputIndex] = array[a][counter2];
            outputIndex++;
        }
        for (let a = counter4; a >= counter1; a--) {
            output[outputIndex] = array[counter2][a];
            outputIndex++;
        }
        for (let a = counter4; a >= counter3; a--) {
            output[outputIndex] = array[a][counter1];
            outputIndex++;
        }
        counter1++;
        counter2--;
        counter3++;
        counter4--;
    } while (outputIndex < (array[0].length * array[0].length));
    return output;
}
exports.snail = snail;
//# sourceMappingURL=e_4kyu_snail.js.map