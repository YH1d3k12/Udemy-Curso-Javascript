let n = 0;
// como 0 é um valor considerado falso deve-se usar a expressão !
// para se tornar verdadeira.

if(!n) {
    n = 10;
}

let n2 = 0;
n2 = n2 || 10;

console.log(n)
console.log(n2)
// --------------------------------------------------------------
let isValid = true;
if(isValid) {
    console.log("É valido")
}
// Se for valido vai executar a linha de comando caso contrario
// nada acontece.
isValid && console.log("É valido")
// Se for verdadeiro o console.log não é executado
// se for falso o console.log é executado
isValid || console.log("não é valido")