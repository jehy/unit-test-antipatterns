'use strict';

/* eslint-disable class-methods-use-this */

const sinon = require('sinon');
const {assert} = require('chai');

class Widget {
  fetch()
  {}

  loadData()
  {
    this.fetch();
  }
}
if (!sinon.sandbox || !sinon.sandbox.stub) {
  sinon.sandbox = sinon.createSandbox();
}

describe('My widget', () => {

  afterEach(() => {
    // sinon.sandbox.restore(); OOPS it is not restored!
  });

  it('is awesome', () => {
    const widget = new Widget();
    widget.fetch = sinon.sandbox.stub().returns({ one: 1, two: 2 });
    widget.loadData();
    assert.isTrue(widget.fetch.called);
  });
});
