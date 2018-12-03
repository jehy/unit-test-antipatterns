'use strict';

const {assert} = require('chai');
const sinon = require('sinon');

class Dog
{
  // eslint-disable-next-line class-methods-use-this
  say()
  {
    return 'Wow';
  }
}

describe('stubsEverywhere', ()=>{
  before(()=>{
    sinon.stub(Dog.prototype, 'say').callsFake(()=>{
      return 'meow';
    });
  });
  it('should say meow', ()=>{
    const dog = new Dog();
    assert.equal(dog.say(), 'meow', 'dog should say "meow!"');
  });
});
