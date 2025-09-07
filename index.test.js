/* eslint-env jest */

import { sayHello } from './index.js';

test('greets by name', () => {
  expect(sayHello('World')).toBe('Hello, World!');
});
