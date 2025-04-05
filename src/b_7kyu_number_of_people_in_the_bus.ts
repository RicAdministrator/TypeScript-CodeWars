// https://www.codewars.com/kata/5648b12ce68d9daa6b000099/train/typescript

export function number(busStops: [number, number][]): number {
    let passengersIn: number =
        busStops.map(function (v) { return v[0] })      // first value of each record
            .reduce(function (a, b) { return a + b });  // sum of first value of each record

    let passengersOut: number =
        busStops.map(function (v) { return v[1] })      // second value of each record
            .reduce(function (a, b) { return a + b });  // sum of second value of each record

    return passengersIn - passengersOut;
}