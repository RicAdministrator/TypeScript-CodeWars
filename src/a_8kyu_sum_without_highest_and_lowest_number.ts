// https://www.codewars.com/kata/576b93db1129fcf2200001e6/train/typescript

export function sumArray(array: number[] | null): number {
    let output = 0;

    if (array && array.length > 1) {
        const sum = array.reduce((partialSum, a) => partialSum + a, 0);
        const max = Math.max(...array);
        const min = Math.min(...array);

        output = sum - max - min;
    }

    return output;
}