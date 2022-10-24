const { fetchBreedDescription } = require('../breedFetcher');
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', () => {
    fetchBreedDescription('Siberian', (error, desc) => {
      assert.equal(error, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      assert.equal(expectedDesc, desc.trim());
    });
  });

  it('returns an error when an unexpected breedName is passed in', () => {
    fetchBreedDescription('gooasda', (error, desc) => {
      assert.equal(desc, null);
    });
  });
});