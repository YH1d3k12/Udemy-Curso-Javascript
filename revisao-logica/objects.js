/*
   const nomes = ["Connor", "Kara", "Markus"]
   const idade = [23, 27, 31]
   console.log(nomes[0], idades[0])
*/

// Sintaxe Formal
const pessoa = new Object()
pessoa.nome = "Connor"
pessoa.idade = 23
let nome = "Dio" // não vai ter efeito pois a variante está fora do Objeto.

console.log(pessoa["nome"]) // É possivel acessar uma variante dessa maneira.
console.log(pessoa.nome) // Acessar apenas um elemento especifico.

//Sintaxe Literal
const individuo = {
    nome: "Markus",
    idade: 37
}
console.log(individuo)