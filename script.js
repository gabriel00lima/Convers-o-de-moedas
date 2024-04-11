
let valoresConversao = {
    real : {
        dolar: 0.27,
        euro: 0.18 
    },
    dolar: {
        real: 5.03,
        euro: 1.09
    },
    euro:{
        real: 5.47,
        dolar: 0.92
    }
}

let valorUsuario = document.getElementById("valor-usuario");
valorUsuario.addEventListener("keypress", function(event) {
if(event.key == "Enter"){
    converter();
}
});





function limpar(){
    let valorUsuario = document.getElementById("valor-usuario");
    let resultado = document.getElementById("resultado");
    valorUsuario.value = "";
    resultado.textContent = "";
}


function converter() {

let valorUsusario = document.getElementById("valor-usuario").value;

let moedaOrigem = document.getElementById("moeda1").value;
let moedaDestino = document.getElementById("moeda2").value;

if (moedaOrigem == moedaDestino) {
    alert("As moedas são iguais");
    return;
}

let conversao = valorUsusario * valoresConversao[moedaOrigem][moedaDestino];

let simbolo = "";
if(moedaDestino == "real"){
    simbolo = "R$";
}
if(moedaDestino == "dolar"){
    simbolo = "US$"
}
if(moedaDestino == "euro"){
    simbolo == "€"
}


let paragrafoResultado = document.getElementById("resultado");
paragrafoResultado.textContent = simbolo + " " + conversao.toFixed(2);




console.log(conversao)
}

function inverter() {
let moeda1 = document.getElementById("moeda1").value;
let moeda2 = document.getElementById("moeda2").value;


document.getElementById("moeda1").value = moeda2;
document.getElementById("moeda2").value = moeda1

}