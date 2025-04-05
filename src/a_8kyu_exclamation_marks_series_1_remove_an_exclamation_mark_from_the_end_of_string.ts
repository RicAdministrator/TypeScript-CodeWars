// https://www.codewars.com/kata/57fae964d80daa229d000126/train/typescript

export function remove(s: string): string {
    return s.endsWith("!") ? s.substring(0, s.length - 1) : s;
}