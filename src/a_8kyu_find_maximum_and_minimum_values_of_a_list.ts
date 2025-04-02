// https://www.codewars.com/kata/577a98a6ae28071780000989/train/typescript

export const min = (list: number[]): number => {
    return Math.min.apply(null, list);
};

export const max = (list: number[]): number => {
    return Math.max.apply(null, list);
};