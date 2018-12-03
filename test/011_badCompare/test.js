'use strict';

const {assert} = require('chai');

class CustomError extends Error
{
}

function mytestFunction()
{
  throw new CustomError('important message');
}

describe('badCompare', ()=>{
  it('should throw only my custom errors', ()=>{
    let errorHappened = false;
    try {
      mytestFunction();
    }
    catch (err)
    {
      errorHappened = true;
      assert.isTrue(err instanceof CustomError);
    }
    assert.isTrue(errorHappened);
  });
});
