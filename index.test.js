const hello = require('./index');

test('returns greeting message', () => {
  expect(hello('DevOps')).toBe('Hello, DevOps');
});
