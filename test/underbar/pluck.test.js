const _ = require('../../underbar');

describe('pluck()', () => {
  it('returns an array of just ages, given an array of people objects', () => {
    const people = [
    {
      name: 'Tim',
      age: 32
    },
    {
      name: 'Steve',
      age: 40
    }
    ];
    expect(_.pluck(people, 'age')).toEqual([32, 40]);
  });
});