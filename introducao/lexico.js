// tipagem dinamica é a capacidade do javascript de armazenar
// valores de diversos tipos em uma mesma variavel

let x = 10
x = "dois"

let msg = "Uma \" String "
console.log(msg)

console.log(2 * "2")

function teste(){
    console.log(this)
}
teste()

const obj = {
    n: 0,
    teste2: teste
    // caso as duas funções forem de mesmo nome basta colocar uma vez
}
obj.teste2()
