let retornaNumeroAleatorio = require('./service');

test('Verifica se a função retornaNumeroAleatorio() foi chamada', () => {
retornaNumeroAleatorio = jest.fn();
retornaNumeroAleatorio();
expect(retornaNumeroAleatorio).toHaveBeenCalled();
    });
test('Verifica seu retorno', () => {
    retornaNumeroAleatorio = jest.fn().mockReturnValue(10);
    expect(retornaNumeroAleatorio()).toBe(10);
});
test('Verifica quantas vezes a função foi chamada', () => {
    retornaNumeroAleatorio = jest.fn();
    retornaNumeroAleatorio();
    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
});
