// https://www.codewars.com/kata/5715eaedb436cf5606000381/train/typescript

export function positiveSum(arr: number[]): number {
    return arr.filter((obj) => obj > 0).reduce((sum, current) => sum + current, 0);
}