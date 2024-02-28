class Carro {
    constructor(marca, modelo, tipo, cor, motor, preco) {
        this.marca = marca,
            this.modelo = this.capitalize(modelo),
            this.tipo = tipo,
            this.cor = cor,
            this.motor = motor,
            this.preco = preco
    }

    capitalize(string) {
        return `${string.charAt(0).toUpperCase()}${string.slice(1)}`;
    }

    descontoNaVenda(preco) {
        let valorDesconto = preco - preco * (15 / 100);
        return `Preço atual: ${preco}, com desconto: ${valorDesconto}`;
    }
 
}

let carro1 = new Carro("VW", "gol", "hatch", "preto", 1.6, 80000.00);
let carro2 = new Carro("Chevrolet", "onix", "sedan", "prata", 1.2, 100000.00);

console.log(carro1);
console.log(carro2);

console.log(carro1.descontoNaVenda(carro1.preco));

