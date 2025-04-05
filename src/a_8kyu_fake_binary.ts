// https://www.codewars.com/kata/57eae65a4321032ce000002d/train/typescript

export const fakeBin = (x: string): string => {
    let output = "";

    for (let i = 0; i < x.length; i++) {
        output += +x.charAt(i) < 5 ? "0" : "1";
    }

    return output;
};