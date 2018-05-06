/*
Estados de uma promise:
1) Pendente: nem realizou nem deu erro.
2) Realizada: quando chama o resolve.
3) Rejeitada:
Chegando nos dois últimos estados, ela não muda mais.
Ela só muda de estado se estiver pendente.
*/

var cnt = 0;

function testePromisse(){

	var n = ++cnt;
	
	console.log(n + ') Início (Código sync iniciado)');
	
	var p1= new Promise(
		function (resolve, reject){
			console.log(n + ' Promisse iniciou (Código async)');
			global.setTimeout(
				function(){
					resolve(n)
				}, Math.random() * 2000 + 1000);
		});
	p1.then(function (val){
			console.log (val + ') Promisse realizada (Codigo async concluido)');
		});
		console.log (n + ') Promisse criada (Codigo sync concluido)');
}
testePromisse();
testePromisse();
testePromisse();