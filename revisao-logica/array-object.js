// Array const nomes = ["","",""]
// Objeto const pessoa = {nome:"Dom", idade: 31}

const pessoas = [
    {
        nome: "Connor",
        idade: 23,
    },
    {
        nome: "Markus",
        idade: 35,
    },
    {
        nome: "Kara",
        idade: 27,
    },
    {
        nome: "Hank",
        idade: 43,
    }
]
console.log(pessoas[0])

for (let i = 0; i < pessoas.length; i++){
    console.log(`O ${pessoas[i].nome} possui ${pessoas[i].idade} anos`)
}