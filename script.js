
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

let botaoConverter = document.getElementById("botao-converter");
botaoConverter.addEventListener("click",converter);

let botaoInverter = document.getElementById("botao-inverter");
botaoInverter.addEventListener("click",inverter);

let botaoLimpar = document.getElementById("botao-limpar");
botaoLimpar.addEventListener("click",limpar);

let botaoAceitaMensagem = document.getElementById("botao-aceita-mensagem");
botaoAceitaMensagem.addEventListener("click",aceitaMensagem);

if(localStorage.getItem("aceitouCookie")=="1"){
    aceitaMensagem();
}

function salvaResultadoNoHistorico(conversao){
    let conversaoEmJson = JSON.stringify(conversao);
    localStorage.setItem("historico",conversaoEmJson);
}

function aceitaMensagem(){
   let divMensagemUsuario = document.getElementById("container-mensagem-usuario");
   //quero adicionar uma classe (oculto) ao elemento divMensagemUsuario
   divMensagemUsuario.classList.add("oculto");

   localStorage.setItem("aceitouCookie","1");
}



function limpar(){
    let valorUsuario = document.getElementById("valor-usuario");
    let resultado = document.getElementById("resultado");
    valorUsuario.value = "";
    resultado.textContent = "";
}

function buscarAPI(){
    let url = "https://economia.awesome.com.br/json/last/USD-BRL"
    fetch(url).then(function(data){
        if(data.status == 200){
            // console.log("retorno ok!")
        }
        // console.log(data)
        return data.JSON();
    }).then(function(response){
        console.log(response);
    }).catch();
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

let resultadoDaConversao = {
    valor:valorUsuario,
    moeda1:moedaOrigem,
    moeda2:moedaDestino,
    resultado:conversao
}

salvaResultadoNoHistorico(resultadoDaConversao);



console.log(conversao)
}

function inverter() {
let moeda1 = document.getElementById("moeda1").value;
let moeda2 = document.getElementById("moeda2").value;


document.getElementById("moeda1").value = moeda2;
document.getElementById("moeda2").value = moeda1

}

function recuperarHistoricoDeConversoes(){
    let historico = localStorage.getItem("historico");
    let hitoricoConvertido = JSON.parse(historico);
}