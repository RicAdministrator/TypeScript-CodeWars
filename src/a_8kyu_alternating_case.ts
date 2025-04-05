// https://www.codewars.com/kata/56efc695740d30f963000557/train/typescript

export function toAlternatingCase(s: string): string {
    let output = "";

    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i).match(/[a-zA-Z]/i)) {
            if (s.charAt(i) == s.charAt(i).toLocaleLowerCase()) {
                output += s.charAt(i).toUpperCase();
            }
            else {
                output += s.charAt(i).toLowerCase();
            }
        }
        else {
            output += s.charAt(i);
        }
    }

    return output;
}