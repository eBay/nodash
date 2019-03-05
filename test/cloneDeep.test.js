'use strict';

const chai = require('chai');
const expect = chai.expect;

const { cloneDeep } = require('../src');

describe('cloneDeep test Suite', () => {
    it('clones a shallow object', () => {
        const obj = {
            foo: true,
            bar: 'bar'
        };
        const clone = cloneDeep(obj);

        expect(clone).to.eql(obj);
        expect(clone).to.not.equal(obj);
    });

    it('clones an object 1 level', () => {
        const obj = {
            foo: true,
            bar: {
                baz: false
            }
        };
        const clone = cloneDeep(obj);

        expect(clone).to.eql(obj);
        expect(clone).to.not.equal(obj);
        expect(clone.bar).to.eql(obj.bar);
        expect(clone.bar).to.not.equal(obj.bar);
    });

    it('clones an object crazy levels deep', () => {
        const obj = {
            foo: true,
            bar: {
                baz: {
                    'foo-bar': {
                        crazy: [
                            0, { crazier: null }
                        ]
                    }
                }
            }
        };
        const clone = cloneDeep(obj);

        expect(clone).to.eql(obj);
        expect(clone).to.not.equal(obj);
        expect(clone.bar).to.not.equal(obj.bar);
        expect(clone.bar.baz).to.not.equal(obj.bar.baz);
        expect(clone.bar.baz['foo-bar']).to.not.equal(obj.bar.baz['foo-bar']);
        expect(clone.bar.baz['foo-bar'].crazy).to.not.equal(obj.bar.baz['foo-bar'].crazy);
        expect(clone.bar.baz['foo-bar'].crazy[1]).to.not.equal(obj.bar.baz['foo-bar'].crazy[1]);
        expect(clone.bar.baz['foo-bar'].crazy[1].crazier).to.equal(obj.bar.baz['foo-bar'].crazy[1].crazier);
    });

    it('should clone an array', () => {
        const arr = ['4', { foo: true }];
        const clone = cloneDeep(arr);

        expect(clone).to.eql(arr);
        expect(clone).to.not.equal(arr);
        expect(clone[1]).to.eql(arr[1]);
        expect(clone[1]).to.not.equal(arr[1]);
    });
});
