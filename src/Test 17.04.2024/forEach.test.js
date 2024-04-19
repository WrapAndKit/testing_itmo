const forEach = require('./forEach');

test('forEach mock function', () => {
  const mockCallback = jest.fn(x => 42 + x);

  forEach([0, 1, 3], mockCallback);

  expect(mockCallback.mock.calls).toHaveLength(3);
});

test('forEach params', () => {
  const mockCallback = jest.fn(x => 42 + x);

  forEach([0, 1, 3], mockCallback);

  expect(mockCallback.mock.calls[1][0]).toBe(1);
});

test('forEach result', () => {
  const mockCallback = jest.fn(x => 42 + x);
  
  forEach([0, 1, 3], mockCallback);

  expect(mockCallback.mock.results[2].value).toBe(45);
});