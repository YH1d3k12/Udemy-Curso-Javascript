// criar um Array com números randomicos não repetidos
function rollD20(max){
    return parseInt(Math.random() * max)
}

let arr = []
let i = 0
while (arr.length < 20){
    i++
    let rN = rollD20(20)
    console.log(rN)

    if(arr.indexOf(rN) < 0){
        arr.push(rN)
    } else {
        console.log(rN, "Já existe no Array")
    }
}
console.log(arr)
console.log("O loop foi executado", i, " vezes")