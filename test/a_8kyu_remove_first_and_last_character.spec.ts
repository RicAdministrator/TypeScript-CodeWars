import { removeChar } from '../src/a_8kyu_remove_first_and_last_character';
import { assert } from 'chai';

describe('Test a_8kyu_remove_first_and_last_character', () => {
    it('basic tests', () => {
        assert.equal(removeChar('eloquent'), 'loquen');
        assert.equal(removeChar('country'), 'ountr');
        assert.equal(removeChar('person'), 'erso');
        assert.equal(removeChar('place'), 'lac');
        assert.equal(removeChar('ok'), '');
    });
});