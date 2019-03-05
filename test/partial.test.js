
/* eslint-disable no-unused-expressions */
'use strict';

const chai = require('chai');
const expect = chai.expect;

const { partial } = require('../src');

describe('partial test Suite', () => {
    it('returns a function partial', () => {
        const getGreeting = (greeting, firstName, lastName) => `${greeting}, ${firstName} ${lastName}`;
        const partialGreeing = partial(getGreeting, 'Hi');
        expect(partialGreeing('Homer', 'Simpson')).to.equal('Hi, Homer Simpson');
    });
});
