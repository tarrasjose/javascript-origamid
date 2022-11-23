function Carro(marcaAtribuida, precoAtribuido) {
	this.marca = marcaAtribuida;
	this.preco = precoAtribuido;
}

const honda = new Carro('Honda Civic', 80000);
console.log(honda);

const fiat = new Carro('Fiat Uno', 50000);
console.log(fiat)


function Carro2(marca, precoInicial) {
	const taxa = 1.2;
	const precoFinal = precoInicial * taxa;
	this.marca = marca;
	this.preco = precoFinal;
}

const i30 = new Carro2('i30', 50000);
console.log(i30);