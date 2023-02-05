// Iterar Objetos
const pessoa = {
    nome: "Maria",
    idade: 19,
    email: "maria_@hotmail.com"
}

for (let prop in pessoa) {
    console.log(prop)
    console.log(pessoa[prop])
}