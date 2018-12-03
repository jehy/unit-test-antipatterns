'use strict';

const {assert} = require('chai');

function someTestFunction(a)
{
  if (a === 1)
  {
    return 1;
  }

  // please imagine a tonn of complicated code here
  return 2;

}

describe('noCoverage', ()=>{
  it('is really simple', ()=>{
    const res = someTestFunction(1);
    assert.equal(res, 1);
  });
});
