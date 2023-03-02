/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');
const {
  addTotal,
} = require('./addTotal');

describe('addTotal', () => {
  after(() => {
    spy.restore('reduce');
  });

  it('is a function', () => {
    expect(typeof addTotal).to.equal('function');
  });

  it('returns a number', () => {
    const cart = [
      {
        item: 'milk',
        price: 2.99,
        category: 'dairy',
      },
      {
        item: 'cheese',
        price: 4.99,
        category: 'dairy',
      },
    ];

    const returnedValue = addTotal(cart, 'NY');
    expect(typeof returnedValue).to.equal('number');
  });

  it('returns the correct total of all the items in the cart including appropriate tax rate', () => {
    const cart = [
      {
        item: 'milk',
        price: 2.99,
        category: 'dairy',
      },
      {
        item: 'cheese',
        price: 4.99,
        category: 'dairy',
      },
      {
        item: 'ice cream',
        price: 3.99,
        category: 'dairy',
      },
    ];

    const returnedValue = addTotal(cart, 'NY');

    expect(returnedValue).to.equal(13.05);

    expect(addTotal(cart, 'CT')).to.equal(13.41);

    expect(addTotal(cart, 'NJ')).to.equal(12.81);
  });

  it('***EXTRA-CREDIT*** calls Array.prototype.reduce', () => {
    const cart = [
      {
        item: 'milk',
        price: 2.99,
        category: 'dairy',
      },
      {
        item: 'cheese',
        price: 4.99,
        category: 'dairy',
      },
    ];

    spy = sinon.spy(Array.prototype, 'reduce');
    const returnedValue = addTotal(cart, 'NY');

    expect(returnedValue).to.deep.equal(8.70);
    sinon.assert.calledOnce(spy);
  });
});
