/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  addItems,
} = require('./addItems');

describe('addItems', () => {
  it('is a function', () => {
    expect(typeof addItems).to.equal('function');
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

    const itemsToAdd = [{
      item: 'ice cream',
      price: 3.99,
      category: 'dairy',
    }];
    const returnedValue = addItems(cart, itemsToAdd);
    expect(typeof returnedValue).to.equal('object');
    expect(Array.isArray(returnedValue)).to.equal(true);
  });

  it('returns an array with the new item added to the cart', () => {
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

    const itemsToAdd = [{
      item: 'ice cream',
      price: 3.99,
      category: 'dairy',
    }];
    const returnedValue = addItems(cart, itemsToAdd);

    expect(returnedValue).to.deep.equal(
      [
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
      ],
    );
  });

  it('returns an array with multiple items added to the cart', () => {
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

    const itemsToAdd = [{
      item: 'ice cream',
      price: 3.99,
      category: 'dairy',
    },
    {
      item: 'yogurt',
      price: 5.99,
      category: 'dairy',
    }];
    const returnedValue = addItems(cart, itemsToAdd);

    expect(returnedValue).to.deep.equal(
      [
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
        {
          item: 'yogurt',
          price: 5.99,
          category: 'dairy',
        },
      ],
    );
  });
});
