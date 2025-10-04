import { squareOrSquareRoot } from '../src/a_8kyu_to_squareroot_or_not_to_squareroot';
import { assert } from "chai";

describe("Test a_8kyu_to_squareroot_or_not_to_squareroot", function () {
    it("basic tests 1", function () {
        let input: number[] = [4, 3, 9, 7, 2, 1];
        let expected: number[] = [2, 9, 3, 49, 4, 1];
        assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
    });
    it("basic test 2", function () {
        let input: number[] = [100, 101, 5, 5, 1, 1];
        let expected: number[] = [10, 10201, 25, 25, 1, 1];
        assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
    });

    it("basic test 3", function () {
        let input: number[] = [1, 2, 3, 4, 5, 6];
        let expected: number[] = [1, 4, 9, 2, 25, 36];
        assert.deepEqual(squareOrSquareRoot(input.slice()), expected);
    });
});