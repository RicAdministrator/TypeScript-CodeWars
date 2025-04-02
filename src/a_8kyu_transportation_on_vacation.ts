// https://www.codewars.com/kata/568d0dd208ee69389d000016/train/typescript

export function rentalCarCost(d: number): number {
    let output: number = 0;

    if (d > 0 && d < 3) {
        output = d * 40;
    }
    else if (d < 7) {
        output = (d * 40) - 20;
    }
    else {
        output = (d * 40) - 50;
    }

    return output;
}