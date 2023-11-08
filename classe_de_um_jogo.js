class Heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo
    }

    atacar(){
        let tipoAtaque = "";
        
        if(this.tipo == "mago"){
            tipoAtaque = "magia"
        }
        else if(this.tipo == "guerreiro"){
            tipoAtaque = "espada"
        }
        else if(this.tipo == "monge"){
            tipoAtaque = "artes maciais"
        }
        else if(this.tipo == "ninja"){
            tipoAtaque = "shuriken"
        }

        console.log("o",this.tipo,"atacou usando",tipoAtaque);
    }
}

let mago = new Heroi("julio",19,"mago");
mago.atacar();

let guerreiro = new Heroi("julio",19,"guerreiro");
guerreiro.atacar();

let monge = new Heroi("julio",19,"monge");
monge.atacar();

let ninja = new Heroi("julio",19,"ninja");
ninja.atacar();