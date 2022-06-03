let retornaNumeroAleatorio = require('./service');

test('1 - Verifica se a função retornaNumeroAleatorio() foi chamada', () => {
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

test('2 - Verifica se a função foi chamada, qual seu retorno, quantas vezes foi chamada e com quais parâmetros', () => {
    retornaNumeroAleatorio = jest.fn().mockImplementation((a, b) => a / b);
    retornaNumeroAleatorio();

    expect(retornaNumeroAleatorio).toHaveBeenCalledTimes(1);
    expect(retornaNumeroAleatorio).toHaveBeenCalled();
    expect(retornaNumeroAleatorio(10, 5)).toBe(2);
    expect(retornaNumeroAleatorio).toHaveBeenCalledWith(10, 5);
});

describe('3 - testando implementações',() =>{
    test('Verifica se a função mocakada recebe 3 parâmetros e retorna sua multiplicação', () => {
        retornaNumeroAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);

        expect(retornaNumeroAleatorio(3, 5, 2)).toBe(30);
        expect(retornaNumeroAleatorio).toHaveBeenCalledWith(3, 5, 2);
    });
    test('Verifica se a função mokada recebe um parâmetro e retorna seu dobro', () => {
        retornaNumeroAleatorio = jest.fn().mockReset();
        retornaNumeroAleatorio = jest.fn().mockImplementation((a) => a * 2);
        
        expect(retornaNumeroAleatorio(6)).toBe(12);
        expect(retornaNumeroAleatorio).toHaveBeenCalledWith(6);
    });
});
