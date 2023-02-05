function calcularIMC(peso, altura){
    if (peso === undefined || altura === undefined){
        throw Error("need two parameters")
    }
    return peso / (altura * altura)
}
function classificaIMC(imc){
    for (i = 0; i <= 999999999; i++){}
    if (imc <= 16.9){
        return 'Muito abaixo do peso';
    }else if (imc <= 18.4) {
        return 'Abaixo do peso';
    }else if (imc <= 24.9){
        return 'Peso Normal';
    }else if(imc <= 29.9){
        return 'Acima do peso';
    }else if (imc <= 34.9) {
        return 'Obesidade Grau I';
    }else if (imc <= 40){
        return 'Obesidade Grau II';
    }else {
        return 'Obesidade Grau III';
    };
}

let imc = calcularIMC(70, 1.70)
console.log(imc)
console.log(classificaIMC(imc))