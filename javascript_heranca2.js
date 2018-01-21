var Homem = function (nome, idade){
	this.nome = nome;
	this.idade = idade;
};
/* 
A propriedade prototype pertence a funções.
E nas operações de new, tem-se o vínculo do protótipo do 
	objeto recem criado com o prototype da função criadora (Homem, neste caso).
*/
Homem.prototype.sexo = "Masculino";
/*
prototype é um objeto que somente as funções têm e que só é usado
em momentos que se esteja usando o new.
O new faz isso de forma implícita:
pedro.__proto__= Homem.prototype;
*/
//new injeta no protótipo de João o protótipo de homem.
var joao = new Homem("João", 20);
console.log(joao);
console.log(joao.sexo);

var pedro = {};
pedro.__proto__= Homem.prototype;
Homem.apply(pedro, ["Pedro", 18]);
console.log(pedro);
console.log(pedro.sexo);