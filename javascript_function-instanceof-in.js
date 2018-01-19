var Pessoa = function (nome, idade){
	this.nome = nome;
	this.idade = idade;
};

var pedro = new Pessoa('Pedro', 24);
console.log(pedro);
console.log(pedro instanceof Pessoa);

var maria = new Pessoa('Maria', 30);
console.log(maria);
console.log(maria instanceof Pessoa);
console.log(maria instanceof Date);

console.log('nome' in maria);
console.log('peso' in maria);
console.log(Pessoa);
console.log('nome' in Pessoa);

console.log('idade' in maria);
delete maria.idade;
console.log('idade' in maria);