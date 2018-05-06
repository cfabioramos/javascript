/*
Escopo Léxico
Em Javascript, variáveis definidas fora de uma função,
são automaticamente disponíveis dentro.
*/

/*
Closure: a function where you use a variable defined outsite the scope.
It preserves the values of the variables inside the function as a property.
When you execute de inner function it uses that closure.

Functions with the preserved data.
*/

var passed = 3;

/*var addTo = function (passed){
	var inner = 2;
	return passed + inner;
};*/

/*
it will look for the variable "passed"
outsite the function. If it can not find, then it would 
keep going further until it finds it. if it can not find it
then it will be undefined.
*/
var addTo = function (){
	var inner = 2;
	return passed + inner;
};

console.log(addTo());
console.dir(addTo);