'use strict';

const {assert} = require('chai');
const moment = require('moment');

function someDateBasedFunction(date)
{
  if (moment().isAfter(date))
  {
    return 0;
  }
  return 1;
}

describe('useFutureDate', ()=>{
  it('should return 0 for passed date', ()=>{
    const pastDate = moment('2010-01-01');
    assert.equal(someDateBasedFunction(pastDate), 0);
  });
  it('should return 1 for future date', ()=>{
    const itWillAlwaysBeInFuture = moment('2030-01-01');
    assert.equal(someDateBasedFunction(itWillAlwaysBeInFuture), 1);
  });
});
