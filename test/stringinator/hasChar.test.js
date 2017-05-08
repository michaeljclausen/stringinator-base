const stringinator = require('../../stringinator');

describe('hasChar()', () => {
  it('returns true if a target char is present', () => {
    expect(stringinator.hasChar('bubbles', 'u')).toBe(true);
  });
});
