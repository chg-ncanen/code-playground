
let skipTest = false;

setSkipTest = (value) => {
  skipTest = value;
};

describe('sumtest2', () => {
  const sum = require('./sum');
  it('adds 2 + 4 to equal 6', () => {
    if (skipTest) {
      console.log("skipping: " + expect.getState().currentTestName);
      return;
    };

    expect(sum(2, 4)).toBe(6);
  })}
);

module.exports = { setSkipTest };