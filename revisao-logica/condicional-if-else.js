/* let divinePower = false;

if (divinePower){
    console.log(`É um paladino`)
} else {
    console.log(`Herege`)
};
*/

let dinheiro = true;
let idade = 17

if(!dinheiro){
    console.log(`vai farmar`)
} else {
    if (idade >= 18) {
        console.log(`pode tomar`)
    } else {
        console.log(`Não pode tomar fdc que tu é rei de Timphia`)
    }
};

let n1 = 6;
let n2 = 8;
let media = (n1 + n2) / 2;
console.log(`media ${media}`);

if (n1 === 0 || n2 === 0) {
    console.log(`Reprovado`)
} else if (media < 7) {
    console.log(`Risco de Reprovar, vai para Recuperação`)
} else {
    console.log("Parabens foi aprovado")
};

// Valor Ternário 

/*
let msgMaiorIdade = ""
if (idade >= 18){
    msgMaiorIdade = "É maior de idade"
} else {
    msgMaiorIdade = "É menor de 18 anos"
}
*/
let msgMaiorIdade = (idade >= 18) ? "true" : "false";

console.log(msgMaiorIdade)