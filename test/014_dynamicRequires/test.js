'use strict';

const {assert} = require('chai');

describe('dynamicRequires', ()=>{
  it('should return english locale', ()=>{

    // HACK :
    // Some people mutate locale in tests to chinese so I will require moment here

    // eslint-disable-next-line global-require
    const moment = require('moment');
    const someDate = moment('2010-01-01').format('MMMM');
    assert.equal(someDate, 'January');
  });
});
