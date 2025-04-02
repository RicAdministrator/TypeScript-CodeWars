// https://www.codewars.com/kata/57eaeb9578748ff92a000009/train/typescript

export function sumMix(x: any[]): number {
    let output: number = 0;

    x.forEach(function (value) {
        if (typeof value === 'number') {
            output += value;
        }
        else {
            output += parseInt(value);
        }
    }); 

    return output;
}