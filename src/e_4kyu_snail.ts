// https://www.codewars.com/kata/521c2db8ddc89b9b7a0000c1

export function snail(array: number[][]): number[] {
    let output: number[] = [];
    let counter1: number = 0;
    let counter2: number = array[0].length - 1;
    let counter3: number = 1;
    let counter4: number = array[0].length - 2;
    let outputIndex: number = 0;

    do {
        for (let a: number = counter1; a <= counter2; a++) {
            output[outputIndex] = array[counter1][a];
            outputIndex++;
        }

        for (let a: number = counter3; a <= counter2; a++) {
            output[outputIndex] = array[a][counter2];
            outputIndex++;
        }

        for (let a: number = counter4; a >= counter1; a--) {
            output[outputIndex] = array[counter2][a];
            outputIndex++;
        }

        for (let a: number = counter4; a >= counter3; a--) {
            output[outputIndex] = array[a][counter1];
            outputIndex++;
        }

        counter1++;
        counter2--;
        counter3++;
        counter4--;
    } while (outputIndex < (array[0].length * array[0].length))

    return output;
}