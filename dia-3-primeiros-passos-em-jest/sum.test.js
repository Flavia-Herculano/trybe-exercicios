const sum = require('./sum.js');

//1 - A função sum(a, b) retorna a soma do parâmetro a com o b
// 1.1 Teste se o retorno de sum(4, 5) é 9
test('soma dois valores', () => {
    expect(sum(4, 5)).toBe(9);
});

//1.2 Teste se o retorno de sum(0, 0) é 0
test('0 mais 0 é igual a 0', () => {
    expect(sum(0, 0)).toBe(0);
});

// 1.3 Teste se a função sum lança um erro quando os parâmetros são 4 e "5" (string 5)
test('Erro ao somar number mais string', () => {
    expect(() => sum(4, "5")). toThrowError();
});

// 1.4 Teste se a mensagem de erro é "parameters must be numbers" quando realizar a chamada sum(4, "5")
test('Mensagem de erro ao somar numbers com strings', () => {
    expect(() => sum(4, "5")). toThrowError('parameters must be numbers');
});