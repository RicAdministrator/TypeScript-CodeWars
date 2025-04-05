// https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/typescript

export function basicOp(operation: string, value1: number, value2: number): number {
    let output = 0;

    switch (operation) {
        case '+':
            output = value1 + value2;
            break;

        case '-':
            output = value1 - value2;
            break;

        case '*':
            output = value1 * value2;
            break;

        case '/':
            output = value1 / value2;
            break;
    }

    return output;
}