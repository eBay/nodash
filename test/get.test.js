/* eslint-disable no-unused-expressions */
'use strict';

const chai = require('chai');
const expect = chai.expect;

const { get } = require('../src');
const { privates: { cache } } = require('../src/getPathArray');

const testObj = {
    foo: {
        bar: [
            true,
            false
        ]
    }
};

describe('get test Suite', () => {
    it('returns a value if it exists, one level', () => {
        expect(get(testObj, "foo")).to.be.ok;
    });

    it('returns a value if it exists, two levels', () => {
        expect(get(testObj, "foo.bar")).to.be.ok;
    });

    it('returns a value if it exists, three levels', () => {
        expect(get(testObj, "foo.bar[1]")).to.be.false;
    });

    it('returns undefined if it exists, one level', () => {
        expect(get(testObj, "nope")).to.be.undefined;
    });

    it('works when the first property is an index', () => {
        expect(get([{ foo: true }], '[0].foo')).to.be.true;
    });

    it('works with falsey values', () => {
        expect(get(testObj)).to.be.undefined;
        expect(get(testObj, undefined, 'default')).to.equal('default');
    });

    it('works with bracket notation outside of arrays', () => {
        expect(get(testObj, "foo['bar'][1]")).to.be.false;
    });

    it('memoizes the values', () => {
        const path = '["0"].fake.path[0]["fake"]';
        const obj = [{
            fake: {
                path: [
                    {
                        fake: true
                    }
                ]
            }
        }];
        expect(cache[path]).to.be.undefined;
        expect(get(obj, path)).to.be.true;
        expect(cache[path]).to.not.be.undefined;
    });
});
