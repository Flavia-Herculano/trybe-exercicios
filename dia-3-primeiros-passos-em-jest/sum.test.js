const sum = require('./sum');

test('soma dois valores', () => {
    expect(sum(4, 5)).toBe(9);
});
