'use strict';

const chai = require('chai');
const expect = chai.expect;

const { castArray } = require('../src');

describe('castArray test Suite', () => {
    context('when given an array', () => {
        it('returns the given array', () => {
            const actual = castArray(['hello']);
            expect(actual).to.eql(['hello']);
        });
    });

    context('when called with no arguments', () => {
        it('returns an empty array', () => {
            const actual = castArray();
            expect(actual).to.eql([]);
        });
    });

    context('when given a value', () => {
        it('returns the given argument wrapped in an array', () => {
            const actual = castArray('hello');
            expect(actual).to.eql(['hello']);
        });

        it('returns the falsey value wrapped in an array', () => {
            const actual = castArray(0);
            expect(actual).to.eql([0]);
        });

        it('returns null wrapped in an array', () => {
            const actual = castArray(null);
            expect(actual).to.eql([null]);
        });

        it('returns undefined wrapped in an array', () => {
            const actual = castArray(undefined);
            expect(actual).to.eql([undefined]);
        });

        it('returns an object wrapped in an array', () => {
            const actual = castArray({ a: 'b' });
            expect(actual).to.eql([{ a: 'b' }]);
        });
    });
});