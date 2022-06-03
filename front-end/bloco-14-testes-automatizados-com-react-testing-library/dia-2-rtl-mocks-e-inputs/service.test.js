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

test('Verifica se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    retornaNumeroAleatorio = jest.fn().mockImplementation((a, b) => a / b);
    retornaNumeroAleatorio();

    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(retornaNumeroAleatorio).toHaveBeenCalled();
    expect(retornaNumeroAleatorio(10, 5)).toBe(2);
    expect(retornaNumeroAleatorio).toHaveBeenCalledWith(10, 5);

});
