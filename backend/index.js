const express = require('express');

const aplicacao = express();

aplicacao.get('/',(req,res)=>{
    res.send("Meu backend ta funcionando")
});

aplicacao.post('/',(req,res)=> {
res.send('Esta funcionando');
});

aplicacao.get('/moedas',(req,res)=>{
const moedas = {
    BRL: "real",
    USD: "dolar",
    EUR: "euro"
}
res.status(200).json(moedas);
});

aplicacao.listen(4000,()=>{
    console.log("Estou escutando a porta 4000");
});