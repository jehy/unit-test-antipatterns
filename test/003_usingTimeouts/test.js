'use strict';

const {assert} = require('chai');
const Promise = require('bluebird');
const sinon = require('sinon');

class MightyLibrary {
  static someLongFunction() {
    return Promise.resolve(1); // just imagine a really complex and long function here
  }
}

async function doItQuickOrFail()
{
  let res;
  try {
    res = await MightyLibrary.someLongFunction().timeout(1000);
  }
  catch (err)
  {
    if (err instanceof Promise.TimeoutError)
    {
      return false;
    }
    throw err;
  }
  return res;
}

describe('using Timeouts', ()=>{
  it('should return false if waited too much', async ()=>{
    // stub function to emulate looong work
    sinon.stub(MightyLibrary, 'someLongFunction').callsFake(()=>Promise.delay(10000).then(()=>true));
    const res = await doItQuickOrFail();
    assert.equal(res, false);
  });
});
