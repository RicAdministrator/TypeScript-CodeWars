import { litres } from "../src/a_8kyu_keep_hydrated";
import { assert } from "chai";

describe('Test a_8kyu_keep_hydrated', () => {
    it('Some basic tests', () => {
        assert.equal(litres(2), 1);
        assert.equal(litres(1.4), 0);
        assert.equal(litres(12.3), 6);
        assert.equal(litres(0.82), 0);
        assert.equal(litres(11.8), 5);
        assert.equal(litres(1787), 893);
        assert.equal(litres(0), 0);
    });
});