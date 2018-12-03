'use strict';

const {assert} = require('chai');
const Promise = require('bluebird');

function someTomeoutingFunction()
{
  throw new Promise.TimeoutError();
}

describe('no Error check', ()=>{
  it('should throw error', async ()=>{
    let timedOut = false;
    try {
      await someTomeoutingFunction();
    }
    catch (err)
    {
      timedOut = true;
    }
    assert.equal(timedOut, true);
  });
});
