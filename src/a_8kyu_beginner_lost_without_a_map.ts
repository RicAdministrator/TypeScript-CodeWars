// https://www.codewars.com/kata/57f781872e3d8ca2a000007e/train/typescript

export function maps(x: number[]): number[]
{
    let output: number[] = [];

    x.forEach(function (value) {
        output.push(value * 2);
    });

    return output;
}