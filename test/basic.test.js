const { suma } = require('../index');

test('suma 2 + 3 debería ser 5', () => {
  expect(suma(2, 3)).toBe(5);
});
