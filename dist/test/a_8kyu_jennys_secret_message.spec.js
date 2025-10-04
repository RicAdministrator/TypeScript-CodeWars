"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const a_8kyu_jennys_secret_message_1 = require("../src/a_8kyu_jennys_secret_message");
const chai_1 = require("chai");
describe('Test a_8kyu_jennys_secret_message', function () {
    it('should greet some people normally', () => {
        (0, chai_1.expect)((0, a_8kyu_jennys_secret_message_1.greet)('Jim')).to.equal('Hello, Jim!');
        (0, chai_1.expect)((0, a_8kyu_jennys_secret_message_1.greet)('Jane')).to.equal('Hello, Jane!');
        (0, chai_1.expect)((0, a_8kyu_jennys_secret_message_1.greet)('Simon')).to.equal('Hello, Simon!');
    });
    it('should greet Johnny a little bit more special', () => {
        (0, chai_1.expect)((0, a_8kyu_jennys_secret_message_1.greet)('Johnny')).to.equal('Hello, my love!');
    });
});
//# sourceMappingURL=a_8kyu_jennys_secret_message.spec.js.map