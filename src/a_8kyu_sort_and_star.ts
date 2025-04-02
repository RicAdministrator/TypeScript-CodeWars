// https://www.codewars.com/kata/57cfdf34902f6ba3d300001e/train/typescript

export function twoSort(s: string[]): string {
    let firstVal: string = s.sort()[0];
    let output: string = "";

    for (let i = 0; i < firstVal.length; i++) {
        output += firstVal.charAt(i);

        if (i < firstVal.length - 1) {
            output += "***";
        }
    }

    return output;
}