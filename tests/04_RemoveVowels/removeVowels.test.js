/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  removeVowels,
} = require('./removeVowels');

describe('removeVowels', () => {
  it(' removeVowels is a function', () => {
    expect(typeof removeVowels).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = removeVowels('hello there');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns the correct string with vowels removed', () => {
    const returnedValue = removeVowels('i will eat green eggs and ham');

    expect(returnedValue).to.deep.equal(' wll t grn ggs nd hm');
  });

  it('Can handle if capital letters are vowels', () => {
    const returnedValue = removeVowels('It rains in Spain mAInly on the plains');

    expect(returnedValue).to.deep.equal('t rns n Spn mnly n th plns');
  });
});
