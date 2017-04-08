const assert = require('chai').assert;

const howdy = require('../src/hello-world');

describe('A test of hello world stuff', () => {

    it('prints "hello world"', () => {
        assert.equal(howdy(), 'hello world');
    });

});
