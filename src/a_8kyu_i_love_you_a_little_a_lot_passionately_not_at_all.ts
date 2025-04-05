// https://www.codewars.com/kata/57f24e6a18e9fad8eb000296/train/typescript

export function howMuchILoveYou(petals: number): string {
    let output = "I love you";

    for (let x = 2; x <= petals; x++) {
        switch (output) {
            case "I love you":
                output = "a little";
                break;

            case "a little":
                output = "a lot";
                break;

            case "a lot":
                output = "passionately";
                break;

            case "passionately":
                output = "madly";
                break;

            case "madly":
                output = "not at all";
                break;

            case "not at all":
                output = "I love you";
                break;
        }
    }

    return output;
}