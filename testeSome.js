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
passageiros.push(new Passageiro('Hélio', 'Médico'));
passageiros.push(new Passageiro('Salen', 'Programador'));
passageiros.push(new Passageiro('Francisca', 'Médica'));

let achou = passageiros.some(passageiro => /médic/i.test(passageiro.profissao));

console.log(achou);