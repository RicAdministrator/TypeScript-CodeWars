"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const chai_1 = require("chai");
const b_7kyu_reverse_words_1 = require("../src/b_7kyu_reverse_words");
describe("Test b_7kyu_reverse_words", function () {
    it("Should return a proper value", function () {
        chai_1.assert.strictEqual((0, b_7kyu_reverse_words_1.reverseWords)('The quick brown fox jumps over the lazy dog.'), 'ehT kciuq nworb xof spmuj revo eht yzal .god', "Input: 'The quick brown fox jumps over the lazy dog.'");
        chai_1.assert.strictEqual((0, b_7kyu_reverse_words_1.reverseWords)('apple'), 'elppa', "Input: 'apple'");
        chai_1.assert.strictEqual((0, b_7kyu_reverse_words_1.reverseWords)('a b c d'), 'a b c d', "Input: 'a b c d'");
        chai_1.assert.strictEqual((0, b_7kyu_reverse_words_1.reverseWords)('  double  spaced  words  '), '  elbuod  decaps  sdrow  ', "Input: '  double  spaced  words  '");
    });
});
//# sourceMappingURL=b_7kyu_reverse_words.spec.js.map