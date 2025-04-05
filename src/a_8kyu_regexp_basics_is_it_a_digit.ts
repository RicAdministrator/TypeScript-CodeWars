// https://www.codewars.com/kata/567bf4f7ee34510f69000032/train/typescript

interface String {    // Necessary, keep it here.
    digit(): boolean;
}

String.prototype.digit = function (): boolean {
    const validInputs: readonly string[] = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return validInputs.some((x) => x === this);
};