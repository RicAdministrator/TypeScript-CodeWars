import { assert } from "chai";
import { name } from "../src/a_8kyu_basic_variable_assignment";

describe("Test a_8kyu_basic_variable_assignment", () => {
    it("Is name equal to codewa.rs?", ()=> {
        assert.equal(name, "codewa.rs", "Typescript, just as plain JS, uses one equal sign (=) for asignment.");
    });
});