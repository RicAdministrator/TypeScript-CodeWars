// https://www.codewars.com/kata/563e320cee5dddcf77000158/train/typescript

export function getAverage(marks: number[]): number {
    let sum = 0;

    marks.forEach(function (value) {
        sum += value;
    });

    return Math.floor(sum / marks.length);
}