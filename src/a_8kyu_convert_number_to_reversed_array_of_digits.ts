// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/typescript

export const digitize = (n: number): number[] => {
    let numbers: number[] = ("" + n).split("").map(function (item) {
        return parseInt(item, 10);
    });

    return numbers.reverse();
};