
let valoresConversao = {
    real : {
        dolar: 5.03,
        euro: 5.47 
    },
    dolar: {
        real: 0.27,
        euro: 0.92
    },
    euro:{
        real: 0.18,
        dolar: 1.09
    }
}



function converter() {

let valorUsusario = document.getElementById("valor-usuario").value;

let moedaOrigem = document.getElementById("moeda1").value;
let moedaDestino = document.getElementById("moeda2").value;


let conversao = valorUsusario * valoresConversao[moedaOrigem][moedaDestino];

console.log(conversao)

/*console.log(moedaOrigem);
console.log(moedaDestino);
console.log(valorUsusario);*/


}