/* eslint-env jest */
const hello = require('./index.js');

test('returns greeting message', () => {
  expect(hello('DevOps')).toBe('Hello, DevOps');
});
