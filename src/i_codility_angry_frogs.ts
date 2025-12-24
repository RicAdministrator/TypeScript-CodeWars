export function solution(blocks: number[]): number {
    let maxBlocksY = 0;
    let maxBlocksZ = 0;
    let arDistance: number[] = [];

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