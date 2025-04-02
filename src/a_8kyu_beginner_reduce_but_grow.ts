export function grow(arr: number[]): number {
    let output = 1;

    arr.forEach(function (value) {
        output *= value;
    });

    return output;
}