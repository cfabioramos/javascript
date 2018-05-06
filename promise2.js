var items = [1, 2, 3, 4, 5];

var fn = function(v){
	return new Promise(resolve => setTimeout(()  => resolve(v * 2), 1000));
};

var acoes = items.map(fn);

var resultados = Promise.all(acoes);

resultados.then(dados => console.log(dados));
