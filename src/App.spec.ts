const { add } = require('./App');
const chai = require('chai');

const should = chai.should();

describe('Test add function', () => {
  it('should return 6', done => {
    add(2, 4).should.equal(6);
    done();
  });
});
