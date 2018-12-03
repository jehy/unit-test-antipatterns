'use strict';

const {assert} = require('chai');
const crypto = require('crypto');


describe('extraTests', ()=>{
  it('should generate unique bytes', ()=>{
    const arr = [];
    for (let i = 0; i < 1000; i++)
    {
      const value = crypto.randomBytes(256);
      arr.push(value);
    }
    const unique = arr.filter((el, index)=>arr.indexOf(el) === index);
    assert.equal(arr.length, unique.length, 'Data is not random enough!');
  });
});
