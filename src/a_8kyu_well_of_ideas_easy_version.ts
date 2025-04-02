// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/typescript

export function well(x: string[]): string {
    let numOfGood: number = 0;
    let output: string = "";

    x.forEach(function (value) {
        if (value == "good")
            numOfGood += 1;
    });

    if (numOfGood == 0)
        output = "Fail!";
    else if (numOfGood > 2)
        output = "I smell a series!";
    else
        output = "Publish!";

    return output;
}