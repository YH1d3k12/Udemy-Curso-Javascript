// strings, number (int, floats), boolean.
// undefined, null, symbol (ES2015).

let minha_var = "minha string";
let minhaVar2 = 'minha "string" com aspas simples';
var minhavar3 = `minha template literal`;
console.log(minha_var);

// Concatenação
let idade = 40;
let msg = "eu possuo " + idade + " anos";~
console.log(msg);

console.log("Hello" + " World");

let msg2 = `eu possuo ${idade} anos`;
let msg21 = "eu possuo ${idade} anos";
console.log(msg2);

// verificar uma variável
console.log(typeof msg, typeof idade, typeof minha_var);

const n1 = 10;
const n2 = 1.1;
console.log(`o tipo de n1 é ${typeof n1} e seu valor é  ${n1}`);
console.log(`o tipo de n2 é ${typeof n2} e seu valor é  ${n2}`);

// boleano ou é falso ou é verdadeiro

const isValid = true;
const isInvalid = false;
console.log(`isValid: ${isValid}`);
console.log(`isInvalid: ${isInvalid}`);

// undefined

let varTeste = null;
console.log(varTeste);
console.log(typeof varTeste);
varTeste = 10;
console.log(typeof varTeste, varTeste);