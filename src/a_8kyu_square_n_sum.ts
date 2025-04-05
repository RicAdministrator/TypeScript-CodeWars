// https://www.codewars.com/kata/515e271a311df0350d00000f/train/typescript

export function squareSum(numbers: number[]): number {
    let output = 0;

    numbers.forEach(function (value) {
        output += value * value;
    });

    return output;
}