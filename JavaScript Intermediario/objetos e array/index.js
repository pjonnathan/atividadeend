/* let frutas = ['uva', 'laranja', 'coco']

let videoGame = {
    nome: 'Xbox',
    valor: 3000
}

let videoGame2 = {
    nome: 'Xbox360',
    valor: 2000
}

let videoGames = [videoGame, videoGame2]

console.log(videoGames[1].nome) */

/* let jogo1 = {
    nome: 'GTA5'
}

let jogo2 = {
    nome: 'BULLY'
}

let videoGame = {
    nome: 'Xbox',
    valor: 3000,
    jogos: [jogo1, jogo2]
}

let jogo3 = {
    nome: 'PES2006'
}

videoGame.jogos.push(jogo3)

console.log(videoGame) */

let cliente = {
    nome: 'Ricardo',
    ultimoPedido: {
        produto: 'Xbox',
        valor: 3000,
        jogos: [
            {nome: 'FIFA'}
        ]
    }
}

console.log(cliente.ultimoPedido.jogos[0].nome)