const myRemove = require('./myRemove');

// 2.1 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) retorna o array esperado
// 2.2 - Verifique se a chamada myRemove([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// 2.3 - Verifique se a chamada myRemove([1, 2, 3, 4], 5) retorna o array esperado
describe('testa a função myRemove', () => {
    it('retorna um array removendo o item certo', () => {
    expect(myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
    expect(myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4]);
    expect(myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
    });
});;
