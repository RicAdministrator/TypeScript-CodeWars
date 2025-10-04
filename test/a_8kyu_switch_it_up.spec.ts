import { switchItUp } from '../src/a_8kyu_switch_it_up';
import { assert } from "chai";

describe("Test a_8kyu_switch_it_up", function () {
    it("Basic Tests", function () {
        assert.equal(switchItUp(1), "One");
        assert.equal(switchItUp(3), "Three");
        assert.equal(switchItUp(5), "Five");
    });
});