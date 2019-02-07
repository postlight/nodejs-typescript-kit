const { add } = require('../example');

test('basic test', () => {
  expect(add(2, 4)).toBe(6);
});
