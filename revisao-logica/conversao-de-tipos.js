// transforma a string em number
let n1 = 10;
let n2 = "2";

/*
console.log(n1 * n2, typeof n1, typeof n2); // Funciona
console.log(n1 / n2, typeof n1, typeof n2); // Funciona
console.log(n1 + n2, typeof n1, typeof n2); // Erro
console.log(n1 - n2, typeof n1, typeof n2); // Funciona
*/

// parseFloat, parseInt, Number() conversores de string para número

let n3 = "20";
n3 = parseInt(n3); // converte para números inteiros
console.log(n3 + n1, typeof n3, typeof n1);

let n4 = "10.513213"; // abrange números decimais
n4 = parseFloat(n4);
console.log(n4 + n1, typeof n4, typeof n1);

let n5 = "x4";
n5 = Number(n5); // Não funciona com caracteres 
console.log(n5 + n1, typeof n5, typeof n1);

// ------------------------------------------------------------------------
// Converter número para outro sistema não decimal

// decimais 0 - 9
// hexadeciamis 0 - f (15)
n2 = 15;
n2 = n2.toString(10);
console.log(n2, typeof n2);

