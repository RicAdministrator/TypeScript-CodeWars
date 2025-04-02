import { assert } from "chai";
import { well } from "../src/a_8kyu_well_of_ideas_easy_version";

describe("Test a_8kyu_well_of_ideas_easy_version", () => {
    it("Fixed tests", () => {
        assert.strictEqual(well(['bad', 'bad', 'bad']), 'Fail!');
        assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
        assert.strictEqual(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
    });
});
