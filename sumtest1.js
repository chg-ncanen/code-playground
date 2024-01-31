
let skipTest = false;

setSkipTest = (value) => {
  skipTest = value;
};

describe('sumtest1', () => { 
  const sum = require('./sum');
  it('adds 1 + 2 to equal 3', () => {
    if (skipTest) {
      console.log("skipping: " + expect.getState().currentTestName);
      return;
    };

    //do the actual test
    expect(sum(1, 2)).toBe(3);
  })
});

module.exports = { setSkipTest };