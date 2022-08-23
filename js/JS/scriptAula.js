/*
function calculaImc (altura, peso){
    return peso / ( altura * altura);
}


var nome = prompt("Qual é Seu Nome?");
var alturaInformada = prompt(nome + " vamos calcular seu IMC! qual é sua Altura?");
var pesoInformado = prompt(nome + ",E Qual é seu peso?");

var imc = calculaImc(alturaInformada, pesoInformado);

document.write(nome + ", Seu imc calculado é " + imc);*/







/*

Anotação Java script:

parseInt(); =

é  uma função que está pronta para receber um texto
e converter para número.....

ex: var vitoria = parseInt(prompt("Quantas Vitória seu time teve?"));

o exemplo acima vai escrever na tela uma pergunta, que recebe como reposta um número,
porém se não usar a função parseInt() javaScript entende é uma string.




function mostraPontos (){
    document.write(pontos);
}


var vitoria = parseInt(prompt("Quantas Vitória seu time teve?"));
var empates = parseInt(prompt("Quantos emapates seu time teve?"));

var pontos = (vitoria * 3) + empates;

if(pontos > 20){
    document.write(pontos+" pontos, Parabéns!")
    document.write("seu time está melhor que ano passado! ");


}
if(pontos < 20 ){
    document.write(pontos +" pontos somente! <br>");
    document.write("seu time está pior que ano passado!");
}





var numeroPesado = Math.round(Math.random()*5);



while(numeroPesado != seuChute){

    var seuChute =  parseInt(prompt("Digite o número que Você quer chutar"));

    if (seuChute == numeroPesado){
        document.write("Parabéns vc Acertou o chute!");
    }
    else{
        alert("não foi dessa vez! tente novamente!");
    }

}



for(i=0;i<11;i++){
    document.write("<br>")

    for(b=0;b<10;b++){
        r = i*b;
    document.write(i+" x "+b+ " = "+r +"<br>");
    }
}
*/
function soma(){
    let valor1=document.querySelector("#number1").value;
    let valor2=document.querySelector("#number2").value;
    let resultado = parseInt(valor1)+ parseInt(valor2);
     document.querySelector("#resultado").innerHTML= resultado;
}
const buttomMut = ()=>{
    let valor1=document.querySelector("#number1").value;
    let valor2=document.querySelector("#number2").value;
    let resultado = valor1 * valor2;
     document.querySelector("#resultado").innerHTML= resultado;

}
let buttomMu = document.querySelector("#buttomMut");
let buttomSoma = document.querySelector("#buttomSoma");

buttomSoma.addEventListener("click", soma);
buttomMu.addEventListener("click",buttomMut);


let segredo = Math.round(Math.random()*5);
let input = document.querySelector("#input");
input.focus();


function verificar(){
    
    
    if(input.value == segredo){
        
        alert("Você Acertou!");
        
    }else{
        alert("Você errou");
    }
    input.value = "";
    input.focus();
}
let butao = document.querySelector("#butao");
butao.addEventListener("click",verificar)