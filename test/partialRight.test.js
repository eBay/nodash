/* eslint-disable no-unused-expressions */
'use strict';

const chai = require('chai');
const expect = chai.expect;

const { partialRight } = require('../src');

describe('partialRight test Suite', () => {
    it('returns a function partial', () => {
        const getGreeting = (greeting, firstName, lastName) => `${greeting}, ${firstName} ${lastName}`;
        const partialGreeing = partialRight(getGreeting, 'Homer', 'Simpson');
        expect(partialGreeing('Hi')).to.equal('Hi, Homer Simpson');
    });
});
