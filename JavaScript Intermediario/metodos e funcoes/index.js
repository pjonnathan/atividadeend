let usuario = {
    nome: 'carlos',
    excluir: function() {
        console.log("O usuário, " + this.nome + ' foi excluido!')
    }
}   
usuario.excluir()