require('mocha');
const assert = require('assert');
const util = require('../lib/clone');

/**
 * Tests for DeepCloneUtil library
 * 
 * @see DeepCloneUtil
 * @author Ian Bastos
 * 
 */

describe('DeepCloneUtil TESTS', () => {
    var mock = {
        a: 1,
        b: 'c',
        c: {
            test: 'test',
            arr: [
                0, 1, 2, 3
            ],
            nested: [
                { a: 'a', b: 'b', c: 'c' }
            ]
        }
    };
    
    var mockOriginal = util.deepClone(mock);
    var clone = util.deepClone(mock);

    it('Deep equal should find every little difference no matter how nested', done => {
        mock.a = 2;
        clone.a = 2;
        assert(util.deepEqual(mock, clone));
        mock.c.test = 'test123';
        assert(!util.deepEqual(mock, clone));
        clone.c.nested = [ 4, 5, 6]
        clone.c.test = 'test123';
        assert(!util.deepEqual(mock, clone));
        mock.c.nested = [ 4, 5, 6 ];
        assert(util.deepEqual(mock, clone));

        /** Reset the mock & clone objects to the clone for subsequent tests */
        mock = util.deepClone(mockOriginal);
        clone = util.deepClone(mockOriginal);
        done();
    });

    /**
     * Tests after deepEqual has been fully tested to 
     * further test deepEqual & deepClone & deepEqualRecursive
     */
    it('Deep cloned objects should be entirely identical', done => {
        assert(util.deepEqual(mock, clone));
        var mockRecursive = util.deepCloneRecursive(mock);
        assert(util.deepEqual(mock, mockRecursive));
        done();
    });

    it('Deep cloned objects should not be identical when the property of one object is modified', done => {
        mock.c.nested[0].c = 'd';
        assert(!util.deepEqual(mock, clone));
        var mockRecursive = util.deepCloneRecursive(mock);
        mockRecursive.c.arr[0] = 1;
        assert(!util.deepEqual(mock, mockRecursive));
        done();
    });
});