// https://www.codewars.com/kata/5259b20d6021e9e14c0010d4/train/typescript

export function reverseWords(str: string): string {
    let output = "";
    let tempStr = "";

    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) == ' ') {
            output += tempStr + " ";
            tempStr = "";
        }
        else {
            tempStr = str.charAt(i) + tempStr;
        }
    }

    if (tempStr != "") {
        output += tempStr;
    }

    return output;
}