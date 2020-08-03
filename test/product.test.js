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

// O valor de venda não pode ser maior que o valor de compra
test('o valor de venda não pode ser maior que o valor de compra', () =>{
    let product = new Produdct('Celular', 1000.00, 900.00, 10 );
    sell(product,3,1000);
    expect(product.sellPrices).toBe(500);   
});

