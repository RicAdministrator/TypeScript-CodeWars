// https://www.codewars.com/kata/58f8a3a27a5c28d92e000144/train/typescript

export function firstNonConsecutive(arr: number[]): null | number {
    let output: number = 0;

    for (let x = 0; x < arr.length; x++) {
        if (x + 1 == arr.length)
            return null;

        if (arr[x + 1] != arr[x] + 1) {
            output = arr[x + 1];
            break;
        }
    }

    return output;
}