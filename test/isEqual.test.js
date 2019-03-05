/* eslint-disable no-unused-expressions */
'use strict';

const chai = require('chai');
const expect = chai.expect;

const { isEqual } = require('../src');

describe('isEqual test Suite', () => {
    it('returns true if two Arrays are equal', () => {
        const arr = [1, 2, '3', false];
        expect(isEqual(arr, [1, 2, '3', false])).to.be.true;
    });

    it('returns false if two Arrays are not equal', () => {
        const arr = [1, 2, '3', false];
        expect(isEqual(arr, [1, 2, 3, false])).to.be.false;
        expect(isEqual(arr, [1, 2, '3'])).to.be.false;
    });

    it('returns true if two Objects are equal', () => {
        const obj = { a: 1, b: 2, c: '3', d: false };
        expect(isEqual(obj, { b: 2, a: 1, d: false, c: '3' })).to.be.true;
    });

    it('returns false if two Objects are not equal', () => {
        const obj = { a: 1, b: 2, c: '3', d: false };
        expect(isEqual(obj, { a: 1, b: 2, c: '3' })).to.be.false;
        expect(isEqual(obj, { a: 1, b: 2, c: 3, d: false })).to.be.false;
    });
});
