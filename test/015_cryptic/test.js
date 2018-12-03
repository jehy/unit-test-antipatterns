'use strict';

const {assert} = require('chai');

function someComplexFunc()
{
  // Imagine a piece of really strange code here
  return 1;
}

describe('cryptic', ()=>{
  it('success', ()=>{
    const result = someComplexFunc();
    assert.equal(result, 1);
  });
  it('should not fail', ()=>{
    const result = someComplexFunc();
    assert.equal(result, 1);
  });
  it('is right', ()=>{
    const result = someComplexFunc();
    assert.equal(result, 1);
  });
  it('makes no difference for solar system', ()=>{
    const result = someComplexFunc();
    assert.equal(result, 1);
  });
});
