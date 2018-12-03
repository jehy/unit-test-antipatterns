'use strict';

const {assert} = require('chai');

function someVeryBigFunc1()
{
  return 1; // imagine a tonn of code here
}
function someVeryBigFunc2()
{
  return 2; // imagine a tonn of code here
}

describe('all Before Tests', ()=>{
  let res1;
  let res2;
  before(async ()=>{
    res1 = await someVeryBigFunc1();
    res2 = await someVeryBigFunc2();
  });
  it('should return 1', ()=>{
    assert.equal(res1, 1);
  });
  it('should return 2', ()=>{
    assert.equal(res2, 2);
  });
});
