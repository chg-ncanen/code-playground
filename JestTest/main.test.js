let testsToSkip;

function getFeatureFlag() {
    return false;
  }

describe('test suite', () => {
  let skipTest; 
    beforeAll(() => {
        featureFlag = getFeatureFlag(); // replace this with the call to get the feature flag 
        if (featureFlag) {
          sumtest1.setSkipTest(true);
        } else{
          sumtest2.setSkipTest(true);
        }
    }),

    it('Just a test', () => {  })
 });

 const sumtest1 = require('./sumtest1.js');
 const sumtest2 = require('./sumtest2.js');