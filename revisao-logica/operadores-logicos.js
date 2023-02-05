/*
And && - tudo deve ser verdadeiro para ser considerado verdadeiro
Or  || - apenas um dos elementos deve ser considerado verdadeiro
Not ! - Retorna o oposto
*/

// Operadores Lógicos
/*
 Para uma pessoa viajar para o exterior:
  - precisa ser maior de 18 anos
  Ou
  - Acompanhado pelos pais
  E
  - ter comprado a passagem
*/

let idade = 18;
let paisPresentes = true;
let passagem = false;
/*
 O codigo abaixo é falho pois o navegador le paisPresentes e passagem primeiro
 e depois verefica se a idade é maior que 18, para então aplicar a lógica do ||

  const podeViajar = idade >= 18 || paisPresentes && passagem;
  const podeViajar = idade >= 18 || (paisPresentes && passagem);
  const podeViajar = idade >= true || false;
*/
const podeViajar = (idade >= 18 || paisPresentes) && passagem; // () Parênteses faz com que a aplicação seja colocada em uma ordem correta
console.log(`Pode Viajar: ${podeViajar}`);

n1 = 6;
n2 = 8;
const media = (n1 + n2) / 2;
console.log(`media: ${media}`);
console.log((3 * 2) ** 2);