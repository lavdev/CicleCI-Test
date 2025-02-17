

/**
 * A Quantidade vendidade pode ser de 1 ou mais unidades
 * --> Se estoque ficar negativo uma exception deve ser lançanda
 * --> O valor de venda não pode ser maior que o valor de compra
 * @param {*} product 
 * @param {*} amount 
 */
export default function sellProduct(product, amount, sellValue=0.00){
    product.stock -= amount;
    product.sellValue = sellValue;
    return product;
}
