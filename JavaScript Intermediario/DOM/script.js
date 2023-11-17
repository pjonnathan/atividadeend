/* let titulo = document.getElementById('titulo_one')

console.log(titulo)

console.log(document.body) */

/* 
let input = document.getElementsByName('nome')

console.log(input) */

/* function AdicionarComentario(){
    let comentario = document.getElementsByName('novo-comentario')

    let textoDigitado = comentario[0].value;


    let novoComentario = document.getElementById('novo-Cmentario');
    
    novoComentario.innerText = textoDigitado
} */

document
    .querySelector("select[name='estado']")
    .addEventListener('change', function (event) {
        console.log(event.target.value)
    })

