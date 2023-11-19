let pessoas = [
    {nome: "Jonnathan", idade: 33}, 
    {nome: "Vanessa", idade: 46}, 
    {nome: "Paulo", idade: 33}, 
    {nome: "Ricardo", idade: 90}, 
    {nome: "Caio", idade: 33}
];

let pessoasCom33Anos = pessoas.filter((pessoa) => pessoa.idade === 33)

console.log(pessoasCom33Anos)