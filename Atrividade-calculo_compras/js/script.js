const desconto = 0.1;
const juros = 0.02;

let Carro = {
    model: "Civic",
    brand: "Honda",
    valor: 100000
};

let Moto = {
    model: "YBR Factor 150cc",
    brand: "Yamaha",
    valor: 100000
  };
  

function calcularCompra(produto, numParcelas) {
  let valor = produto.valor;

  if (numParcelas === 0) {

    let valorComDesconto = valor - (valor * desconto);
    console.log("Compra à vista. Valor com desconto:", valorComDesconto);
  } else if (numParcelas >= 1 && numParcelas <= 10) {

    let valorParcela = valor / numParcelas;
    console.log(`Compra parcelada em ${numParcelas}x. Valor de cada parcela:`, valorParcela);
  } else if (numParcelas >= 11 && numParcelas <= 12) {

    let valorComJuros = valor + (valor * juros);
    let valorParcela = valorComJuros / numParcelas;
    console.log(`Compra parcelada em ${numParcelas}x com juros. Valor de cada parcela:`, valorParcela);
  } else {

    console.log("O número de parcelas não é possível. Trabalhamos somente com até 12x.");
  }
}

calcularCompra(Carro, 0);   
calcularCompra(Moto, 5);   
calcularCompra(Moto, 11);  
