class cliente{
    nome;
    idade;
    agencia;
    cpf;
    saldo;
    }

const cliente1 = new cliente();
cliente1.nome = 'Felipe';
cliente1.idade = 28;
cliente1.agencia = 1001;
cliente1.cpf = 07591752928;
cliente1.saldo = 19858;

console.log(cliente1.agencia);