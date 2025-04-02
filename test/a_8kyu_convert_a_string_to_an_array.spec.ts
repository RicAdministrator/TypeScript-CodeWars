import { stringToArray } from '../src/a_8kyu_convert_a_string_to_an_array';
import chai, { assert } from 'chai';

describe('Test a_8kyu_convert_a_string_to_an_array', () => {
    it('example 1', () => {
        assert.deepEqual(stringToArray("Robin Singh"), ["Robin", "Singh"]);
    });

    it('example 2', () => {
        assert.deepEqual(stringToArray("I love arrays they are my favorite"), ["I", "love", "arrays", "they", "are", "my", "favorite"]);
    });
});