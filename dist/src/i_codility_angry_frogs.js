"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.solution = void 0;
function solution(blocks) {
    let maxBlocksY = 0;
    let maxBlocksZ = 0;
    let arDistance = [];
    for (let x = 0; x < blocks.length; x++) {
        maxBlocksY = 0;
        maxBlocksZ = 0;
        for (let y = x; y > 0; y--) {
            if (blocks[y] <= blocks[y - 1])
                maxBlocksY++;
            else
                break;
        }
        for (let z = x; z < blocks.length - 1; z++) {
            if (blocks[z] <= blocks[z + 1])
                maxBlocksZ++;
            else
                break;
        }
        arDistance.push(maxBlocksY + maxBlocksZ + 1);
    }
    return Math.max(...arDistance);
}
exports.solution = solution;
//# sourceMappingURL=i_codility_angry_frogs.js.map