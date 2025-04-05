import { greet } from '../src/a_8kyu_jennys_secret_message';
import { expect } from 'chai';

describe('Test a_8kyu_jennys_secret_message', function () {
    it('should greet some people normally', () => {
        expect(greet('Jim')).to.equal('Hello, Jim!');
        expect(greet('Jane')).to.equal('Hello, Jane!');
        expect(greet('Simon')).to.equal('Hello, Simon!');
    });

    it('should greet Johnny a little bit more special', () => {
        expect(greet('Johnny')).to.equal('Hello, my love!');
    });
});