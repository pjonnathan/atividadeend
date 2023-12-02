function fazerCafe(ligarFogo, colocarAgua) {
    return new Promise((recuve, reject) => {
        if(ligarFogo && colocarAgua) {
            console.log('Cafe fervendo')
            recuve()
        }else {
            console.log('Coloque no fogo a agua e ligue o fogo')
            reject()
        }
    })
}

function colocarNaXicara() {
    console.log('Colocou na xicara')
}

fazerCafe(true, true).then(colocarNaXicara)