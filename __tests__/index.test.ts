import { exampleFunction } from '../src/index';

test('exampleFunction/1', () => {
  expect(exampleFunction('Jake')).toMatch('Hello, Jake!');
});
