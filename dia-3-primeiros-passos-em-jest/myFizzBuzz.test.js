const myFizzBuzz = require('./myFizzBuzz');

// 3.1 - Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// 3.2 - Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// 3.3 - Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// 3.4 - Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// 3.5 - Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado
describe('testa a função myFizzBuzz', () => {
    it('testa um número cujo o parametro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe("fizzbuzz");
        expect(myFizzBuzz(21)).toBe("fizz");
        expect(myFizzBuzz(20)).toBe("buzz");
        expect(myFizzBuzz(4)).toBe(4);
        expect(myFizzBuzz("2")).toBe(false);
    });
})