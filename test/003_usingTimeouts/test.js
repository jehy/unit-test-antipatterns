'use strict';

const {assert} = require('chai');
const Promise = require('bluebird');

function someLongFunction()
{
  return Promise.delay(10000);
}

describe('using Timeout', ()=>{
  it('should cancel after 1 second', async ()=>{
    let timedOut = false;
    try {
      await someLongFunction().timeout(1000);
    }
    catch (err)
    {
      if (err instanceof Promise.TimeoutError)
      {
        timedOut = true;
      }
      else
      {
        throw err;
      }
    }
    assert.equal(timedOut, true);
  });
});
