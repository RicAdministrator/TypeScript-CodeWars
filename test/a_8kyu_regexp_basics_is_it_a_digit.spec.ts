import '../src/a_8kyu_regexp_basics_is_it_a_digit';
import { assert } from 'chai';

describe('Test a_8kyu_regexp_basics_is_it_a_digit', () => {
    it('Basic tests', () => {
        assert.strictEqual(''.digit(), false);
        assert.strictEqual('7'.digit(), true);
        assert.strictEqual(' '.digit(), false);
        assert.strictEqual('a'.digit(), false);
        assert.strictEqual('a5'.digit(), false);
        assert.strictEqual('14'.digit(), false);
    });
});