'use strict';

function someBadFunc()
{
  throw new Error('I am just wrong!');
}

describe.skip('skipped test', ()=>{
  it('should be fine', ()=>{
    someBadFunc();
  });
});
