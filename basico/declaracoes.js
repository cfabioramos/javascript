/* https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Guide/Values%2C_variables%2C_and_literals#Declarations
*/
var varNum = 36;
var ano = 1981;
const constAno = getAno();
let varTest = 44;

function getAno(){
	return ++ano;
}

function Pessoa(nome){
	this.nome = nome;
	this.idade = varNum;
	this.anoNascimento = constAno;
}

var Pedro = new Pessoa('Pedro Henrique');
console.log (Pedro);
console.log (varTest);

var n = null;
console.log(n * 32);

var a;
console.log("O valor de a é " + a);

console.log('Vamos ver o Hoisting...');

//Hoisting
console.log(z === undefined);

var z = 3;

console.log('Exemplo 2 Hoisting...');
/**
 * Exemplo 2
 */
// retornará um valor undefined
var myvar = "my value";
 
(function() {
  console.log(myvar); // undefined
  var myvar = "local value";
})();

console.log('Vamos ver o let...');

if (true) {
  let y = 5;
}
console.log(y);	// ReferenceError: y não está definido
