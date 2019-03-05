/* eslint-disable no-unused-expressions */
'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');

const { throttle } = require('../src');

describe('throttle Test Suite', () => {
    it('only runs a function once within every threshold', () => {
        const callback = sinon.spy();
        const throttledCallback = throttle(callback, 300);
        for (let i = 0; i < 100; i++) {
            throttledCallback();
        }
        expect(callback.calledOnce).to.be.true;
    });

    it('only runs a function again after a certain threshold', (done) => {
        const callback = sinon.spy();
        const throttledCallback = throttle(callback, 300);
        for (let i = 0; i < 100; i++) {
            throttledCallback();
        }

        setTimeout(() => {
            throttledCallback();
            expect(callback.calledTwice).to.be.true;
            done();
        }, 400);
    });
});
