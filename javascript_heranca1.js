var homem = {
	sexo: "masculino"
};

var joao = {
	nome: "João",
	idade: 20
};

Object.setPrototypeOf(joao, homem);

var pedro = Object.create(homem);
pedro.nome = "Pedro";
pedro.idade = 18;

console.log(joao);
console.log(joao.sexo);

for (var property in joao){
	if (joao.hasOwnProperty(property))
		console.log(property);
}

console.log(pedro);
console.log(pedro.sexo);