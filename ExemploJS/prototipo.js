var Pessoa = function (nome, email){
    this.nome = nome;
    // verifica se o email foi preenchido 
    if(email){
        this.email = email;
    }
}

Pessoa.prototype.email = "contato@ufc.br";
var ricardo = new Pessoa("Ricardo");
console.log(ricardo.email); //contato@ufc.br

var joao = new Pessoa("Joao da Silva", "joao@da.silva");
console.log(joao.email); // joao@da.silva 

Pessoa.prototype.fala = function () {
    console.log("Olá, meu nome é " + this.nome + " e meu email é " + this.email);
};

Pessoa.prototype.anda = function () {
    console.log("Estou andando");
};

Pessoa.fala;
Pessoa.anda;
