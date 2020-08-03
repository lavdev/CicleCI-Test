// A Quantidade vendidade pode ser de 1 ou mais unidades
import Produdct from '../src/model/products';
import sell from '../src/service/sellProduct';

test('deve validar baixa de estoque de uma unidade', () =>{
    let product = new Produdct('Celular', 500.00, 900.00, 10 );
    sell(product,1);
    expect(product.stock).toBe(9);
});

test('deve aceitar a venda de mais de uma unidade', () =>{
    let product = new Produdct('Celular', 500.00, 900.00, 10 );
    sell(product,3);
    expect(product.stock).toBe(7);   
});

