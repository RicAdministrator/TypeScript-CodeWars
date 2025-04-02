import {assert} from "chai";
import { shortLongShort } from "../src/a_8kyu_short_long_short";

describe("Test a_8kyu_short_long_short", function() {
  it("Should pass basic tests", function() {
    assert.equal(shortLongShort('45', '1'), '1451');
    assert.equal(shortLongShort('13', '200'), '1320013');
    assert.equal(shortLongShort('Soon', 'Me'), 'MeSoonMe');
    assert.equal(shortLongShort('U', 'False'), 'UFalseU');
  });
});