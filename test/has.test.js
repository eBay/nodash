/* eslint-disable no-unused-expressions */
'use strict';

const chai = require('chai');
const expect = chai.expect;

const { has } = require('../src');

const testObj = {
    foo: {
        bar: [
            true,
            false
        ]
    }
};

describe('has test Suite', () => {
    it('returns true if it exists, one level', () => {
        expect(has(testObj, "foo")).to.be.true;
    });

    it('returns true if it exists, two levels', () => {
        expect(has(testObj, "foo.bar")).to.be.true;
    });

    it('returns true if it exists, three levels', () => {
        expect(has(testObj, "foo.bar[1]")).to.be.true;
    });

    it('returns false if it does not exist, one level', () => {
        expect(has(testObj, "nope")).to.be.false;
    });

    it('returns false if it does not exist, two levels', () => {
        expect(has(testObj, "foo.nope")).to.be.false;
    });

    it('works when the first property is an index', () => {
        expect(has([{ foo: true }], '[0].foo')).to.be.true;
    });

    it('returns false when the property is on the prototype', () => {
        expect(has(testObj, "foo")).to.be.true;
        expect(has(Object.create(testObj), "foo")).to.be.false;
    });

    it('works with falsey values', () => {
        expect(has()).to.be.false;
        expect(has({})).to.be.false;
    });
});
