let g = "global"

function monstrarN() {
    let g = "local"
    console.log("valor de g: " + g)

    if(true){
        let n1 = "g dentro de if com let"
    }
}
monstrarN()
console.log("valor de g: " + g)

function fnExt() {
    let n = "externo"
    function fnInt() {
        let n = "interno"
        console.log(n)
    }
    fnInt()
    console.log(n)
}
fnExt()