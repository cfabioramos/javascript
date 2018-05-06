let addTo = function(passed){

	let add = function (inner){
		return passed + inner;
	};

	return add;

}

let add1 = addTo(1);
console.dir(add1);
console.log(add1(1));

add2 = addTo(2);
console.dir(add2);
console.log(add2(1));

console.dir(add1);