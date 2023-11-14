/* 'use strict'

this.name = "Ricardo"
function saudar() {
    console.log('This no contexto da funcao', this)
    console.log('Olá, ' + this.name)
}

saudar() */

/* let usuario = {
    nome: 'Ricardo',
    saudar: function() {
        console.log('this no contexto do metodo', this)

        console.log('This.nome no contexto do metodo', this.nome)
    }
}

usuario.saudar() */

let comida = {
    nome: 'Bróculis',
    temperatura: 0
}

comida.cozinhar = function(temperaturaDeCozinha) {
    this.temperatura = temperaturaDeCozinha
}

console.log(comida)

comida.cozinhar(100)

console.log(comida)