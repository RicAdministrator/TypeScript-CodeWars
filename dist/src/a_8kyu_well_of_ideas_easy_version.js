"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.well = void 0;
function well(x) {
    let numOfGood = 0;
    let output = "";
    x.forEach(function (value) {
        if (value == "good")
            numOfGood += 1;
    });
    if (numOfGood == 0)
        output = "Fail!";
    else if (numOfGood > 2)
        output = "I smell a series!";
    else
        output = "Publish!";
    return output;
}
exports.well = well;
//# sourceMappingURL=a_8kyu_well_of_ideas_easy_version.js.map