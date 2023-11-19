let pessoas = [
    {nome: "caio", pais: 'Brasil', idade: 25},
    {nome: "vinicio", pais: 'Argentina', idade: 34},
    {nome: 'Paulo', pais: "Brasil", idade: 24}
]

let procurarPessoa = pessoas.map((pessoa) => pessoa.nome + " nome " + pessoa.idade + " Idade ")

console.log(procurarPessoa)