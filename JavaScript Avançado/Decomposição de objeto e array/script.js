//decoposição de objeto
let pessoa = {
    nome: 'Jonnathan',
    sobrenome: 'Matos',
    idade: 21
}

console.log(pessoa.nome)
//console.log(nome)

let {nome,sobrenome,idade} = pessoa

console.log(nome)


//decomposição de arry

let nomes = ['Jonnathan', 'Caio', 'Victor']

let [pessoa1,pessoa2,pessoa3] = nomes