// como o let está dentro da função ele se aplica
// apenas nela e não afeta o escopo global.
// portanto não econtrara erros ao utilizar duas variaveis
// de mesmo nome dentro de funções diferentes.0
(function(){
    console.log("esta funcionando")

    function init2(){
        console.log("modal start")
    }
    init2()
})()
//função auto executavel

function init(){
    let isValid = true;
    console.log("init modal", isValid);
}
init()
