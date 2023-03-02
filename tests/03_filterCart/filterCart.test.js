/* eslint-disable no-undef */
const { expect } = require('chai');
const sinon = require('sinon');
const {
  filterCart,
} = require('./filterCart');

describe.only('filterCart', () => {
  after(() => {
    spy.restore('filter');
  });

  it('is a function', () => {
    expect(typeof filterCart).to.equal('function');
  });

  it('returns an array', () => {
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

    const returnedValue = filterCart(cart, 'dairy');
    expect(Array.isArray(returnedValue)).to.equal(true);
  });

  it('returns the correct array filtered by category passed', () => {
    const cart = [
      {
        item: 'milk',
        price: 2.99,
        category: 'dairy',
      },
      {
        item: 'banana',
        price: 4.99,
        category: 'fruit',
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
      {
        item: 'strawberry',
        price: 3.99,
        category: 'fruit',
      },
      {
        item: 'steak',
        price: 9.99,
        category: 'beef',
      },
    ];

    const returnedValue = filterCart(cart, 'fruit');

    expect(returnedValue).to.deep.equal([
      {
        item: 'banana',
        price: 4.99,
        category: 'fruit',
      },
      {
        item: 'strawberry',
        price: 3.99,
        category: 'fruit',
      },
    ]);
  });

  it('***EXTRA-CREDIT calls Array.prototype.filter', () => {
    const cart = [
      {
        item: 'milk',
        price: 2.99,
        category: 'dairy',
      },
      {
        item: 'steak',
        price: 9.99,
        category: 'beef',
      },
      {
        item: 'cheese',
        price: 4.99,
        category: 'dairy',
      },
    ];

    spy = sinon.spy(Array.prototype, 'filter');
    const returnedValue = filterCart(cart, 'beef');

    expect(returnedValue).to.deep.equal([{
      item: 'steak',
      price: 9.99,
      category: 'beef',
    }]);
    sinon.assert.calledOnce(spy);
  });
});
