// https://www.codewars.com/kata/57f6ad55cca6e045d2000627/train/typescript

export function squareOrSquareRoot(array: number[]): number[] {
    let output: number[] = [];
    let sqrt: number = 0;

    array.forEach(function (value) {
        sqrt = Math.sqrt(value);
        output.push(sqrt % 1 === 0 ? sqrt : value * value);
    });

    return output;
}