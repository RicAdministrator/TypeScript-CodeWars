// https://www.codewars.com/kata/5556282156230d0e5e000089/train/typescript

export function DNAtoRNA(dna: string): string {
    return dna.replace(/T/g, "U");
}