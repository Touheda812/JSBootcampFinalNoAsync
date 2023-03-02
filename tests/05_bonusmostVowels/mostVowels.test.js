/* eslint-disable no-undef */
const { expect } = require('chai');
const {
  mostVowels,
} = require('./mostVowels');

describe('mostVowels', () => {
  it('is a function', () => {
    expect(typeof mostVowels).to.equal('function');
  });

  it('returns a string', () => {
    const returnedValue = mostVowels('the cat in the boat');
    expect(typeof returnedValue).to.equal('string');
  });

  it('returns the word with the most vowels', () => {
    const returnedValue = mostVowels('look around at how lucky we are to be alive right now.');
    expect(returnedValue).to.equal('around');
  });

  it('returns the word in lowercase with the most vowels in words with different cases', () => {
    const returnedValue = mostVowels('I SHOULD have KNOWN the WORLD was wide ENOUGH');
    expect(returnedValue).to.equal('enough');
  });
});
