import { assert } from "chai";
import { leo } from "../src/a_8kyu_leonardo_dicaprio_and_oscars_module"

describe("Test a_8kyu_leonardo_dicaprio_and_oscars_module", function() {
    it("test", function() {
        assert.strictEqual(leo(89),"Leo got one already!")
        assert.strictEqual(leo(88),"Leo finally won the oscar! Leo is happy")
        assert.strictEqual(leo(87),"When will you give Leo an Oscar?")
        assert.strictEqual(leo(86),"Not even for Wolf of wallstreet?!")
    });
});