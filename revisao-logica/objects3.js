const produto = {
    nome: "Poção de Cura Menor",
    quantidade: 10,
/*    comprar: function(n) {
        if (n > this.quantidade){
            return "quantidade indisponivel"
        }
        this.quantidade -= n
    } */
    comprar(n) {
        if (n > this.quantidade){
            return "quantidade indisponivel"
        }
        this.quantidade -= n
    },
    teste1: function () {
        console.log("-----------")
        console.log(this)
    },
    teste2: () => {
        console.log("-----------")
        console.log(this)
    }


}
produto.teste1()
produto.teste2()

//produto.comprar(5)
//console.log(produto)

//produto.comprar(7)
//console.log(produto)
