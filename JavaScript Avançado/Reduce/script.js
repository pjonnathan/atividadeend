let quantidades = [3,7,8]

let quantidadeTotal = quantidades.reduce(function(somatotal, quant){
    return somatotal += quant 
})

console.log(quantidadeTotal)