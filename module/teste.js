const { estadosCidades } = require("./estados_cidades")
 const nomeGenerico = function(){

     jsonGenerico = {}

     let a = ["joana"]

     a.push('Alexandre')
 
     jsonGenerico.uf = a


     return jsonGenerico
 }
 console.log(nomeGenerico())


 json2 = {}

 let b = ["carol", "carla"]

 json2.a = b

 console.log(b.indexOf("carol"))



// const generica2 = function(a){

//     jsonGenerico = {}

//     jsonGenerico.uf = estadosCidades.estados[a].sigla
//     jsonGenerico.descricao = estadosCidades.estados[a].nome
//     jsonGenerico.capital = estadosCidades.estados[a].capital

//     return jsonGenerico
// }
// console.log(generica2(7))



   


// console.log(filtro("SP"))


// module.exports ={
//     filtro
// }

// siglas = {}
//    let arraySiglas = []

//    estadosCidades.estados.forEach(estados => {
//       arraySiglas.push(estados.sigla)
//    })

//    siglas.uf = arraySiglas
//    return siglas