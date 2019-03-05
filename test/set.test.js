/* eslint-disable no-unused-expressions */
'use strict';

const chai = require('chai');
const expect = chai.expect;

const { set } = require('../src');

describe('set test Suite', () => {
    let setObj;
    beforeEach(() => {
        setObj = {
            foo: {}
        };
    });

    it('sets a value if it exists, one level', () => {
        set(setObj, "foo", "bar");
        expect(setObj.foo).to.equal("bar");
    });

    it('sets a nested value', () => {
        set(setObj, "foo.bar", null);
        expect(setObj.foo.bar).to.be.null;
    });
});
