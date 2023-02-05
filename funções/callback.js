function teste(cb){
    console.log("teste")
    cb()
}
teste(function(){
    console.log("função anonima de callback")
})