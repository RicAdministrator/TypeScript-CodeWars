import {assert} from "chai";
import {buildString} from "../src/a_8kyu_string_templates_bug_fixing_5"

describe("Test a_8kyu_string_templates_bug_fixing_5", function(){
    it("Basic tests", function() {
        assert.equal(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!')
        assert.equal(buildString('Cheese','Milk'), 'I like Cheese, Milk!')
        assert.equal(buildString('Chocolate'), 'I like Chocolate!')
    });
});