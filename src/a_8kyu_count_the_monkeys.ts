// https://www.codewars.com/kata/56f69d9f9400f508fb000ba7/train/typescript

export function monkeyCount(n: number): number[] {
    let output: number[] = [];

    for (let x = 0; x < n; x++) {
        output.push(x + 1);
    }

    return output;
}