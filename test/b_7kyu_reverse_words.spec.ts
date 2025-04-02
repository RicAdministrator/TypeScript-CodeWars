import { assert, config } from "chai";
import { reverseWords } from "../src/b_7kyu_reverse_words";

describe("Test b_7kyu_reverse_words", function () {
    it("Should return a proper value", function () {
        assert.strictEqual(reverseWords('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', "Input: 'The quick brown fox jumps over the lazy dog.'");
        assert.strictEqual(reverseWords('apple'), 'elppa', "Input: 'apple'");
        assert.strictEqual(reverseWords('a b c d'), 'a b c d', "Input: 'a b c d'");
        assert.strictEqual(reverseWords('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', "Input: '  double  spaced  words  '");
    });
});