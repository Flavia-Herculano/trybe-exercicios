const sum = require('./sum');

//1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// 1.1 Teste se o retorno de sum(4, 5) é 9
test('soma dois valores', () => {
    expect(sum(4, 5)).toBe(9);
});

//1.2 Teste se o retorno de sum(0, 0) é 0
test('0 mais 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
});