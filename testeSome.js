/*
class Passageiro {

    constructor(nome, profissao) {

        this.nome = nome;
        this.profissao = profissao;
    }
}
*/

let passageiros = []

passageiros.push(new Passageiro('Orlando', 'Dentista'));
passageiros.push(new Passageiro('Suzada', 'Advogada'));
passageiros.push(new Passageiro('H�lio', 'M�dico'));
passageiros.push(new Passageiro('Salen', 'Programador'));
passageiros.push(new Passageiro('Francisca', 'M�dica'));

let achou = passageiros.some(passageiro => /m�dic/i.test(passageiro.profissao));

console.log(achou);