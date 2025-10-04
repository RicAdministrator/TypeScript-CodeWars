"use strict";
String.prototype.digit = function () {
    const validInputs = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    return validInputs.some((x) => x === this);
};
//# sourceMappingURL=a_8kyu_regexp_basics_is_it_a_digit.js.map