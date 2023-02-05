// Função auto invocavel.
(function(){
    function calcularMedia(){
        let total = 0; // valor total.
        let qtd = arguments.length; // quantidade de argumentos.
        for (let i = 0; i < qtd; i++){
            if(typeof arguments[i] !== "number"){
                throw Error("only numbers")
            } // se o elemento for diferente de número ira passar a mensagem "only numbers".
            total += arguments[i]; // define o total.
        }
        return (total / qtd) || 0 //total dividido pelo número de argumentos.
    }

    let media = calcularMedia(8, 9, 7, 10);
    console.log(media)
})()