/*
Estados de uma promise:
1) Pendente: nem realizou nem deu erro.
2) Realizada: quando chama o resolve.
3) Rejeitada:
Chegando nos dois �ltimos estados, ela n�o muda mais.
Ela s� muda de estado se estiver pendente.
*/

var cnt = 0;

function testePromisse(){

	var n = ++cnt;
	
	console.log(n + ') In�cio (C�digo sync iniciado)');
	
	var p1= new Promise(
		function (resolve, reject){
			console.log(n + ' Promisse iniciou (C�digo async)');
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