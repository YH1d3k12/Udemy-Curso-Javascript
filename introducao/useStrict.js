let x = 10
//"use strict"

function foo(){
    "use strict" 
    // Use strict só funciona apenas dentro desta funçao
    // com excessão de uma variavel estar presente fora no
    // escopo global e estar dentro da function.
    x = 10
    let z = 25
}
foo()
console.log(x)

function dobrar(n1, n1){
    return n1 * n1
}
console.log(dobrar(5, 7)) 
// O valor de n1 sera o último valor agregado, no caso 7
// E caso não seja aplicado um segundo valor resultara em
// um erro pois o segundo não foi definido.

function Teste(){
    console.log(this)
    this.a = "a"
}
Teste()