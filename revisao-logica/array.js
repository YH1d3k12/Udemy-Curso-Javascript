/* Sintaxe Formal */
const arr = new Array(true, "Leonard", 28, new Array("algum número", 30, false))
console.log(typeof arr)
console.log(arr)
console.log(arr[3][2])

//indice 0, 1, 2, 3, 4...
const arr2 = new Array()
arr2[0] = "Samuel"
arr2[1] = "Daniel"
console.log(arr2)

/* Sintaxe Literal */
const arr3 = ["Utsukushii", 3, ["gambare",35],"brabo"]
arr3[3] = "novo valor"
arr3[arr3.length] = "fui adicionado"
arr3.push("fui empurrado")
console.log(arr3)
console.log(arr3[2][0])
console.log(arr3[3])
