const assert = require('assert');
const { getFileContents } = require('./utils');

describe('Your script', () => {
  it('should have the correct array variable added', async () => {
    const scriptFile = await getFileContents('../fortune.sh');

    assert(false);
  });
});