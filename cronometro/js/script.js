let segundos=00;
let minutos=00;
let hora=00;
//impedindo o cronometro de ser chamodo quando esta rodando

//criando o bolean que impede o de ser chamade chmar novamente o tempo
let cronometroAtivo = false;
// variavel que armazena os parametros da div
let novaCorBotao = document.querySelector(".iniciar");
let intervalo;
function doisdigitos(digito){
    if(digito < 10)
    return('0'+ digito);
    else{
        return(digito);
    }
}

function start(){
    // se o cronometroAtivo for igual a false
    if(cronometroAtivo == false){
        // aqui mudamos o valor pra true e impedimos que o evento continue
        cronometroAtivo = true;
        //mudando a cor do botão pra ficar mais visivel que não funciona ate reinicar o cronometro
        novaCorBotao.style.backgroundColor = "silver";
        contador();
        intervalo= setInterval(contador,1000);
    }
}
function pausa(){
    clearInterval(intervalo);
    cronometroAtivo = false;
    novaCorBotao.style.backgroundColor = "rgb(82, 209, 82)";
}
function limpa(){
    clearInterval(intervalo);
    novaCorBotao.style.backgroundColor = "rgb(82, 209, 82)";
    minutos=00;
    segundos=00;
    document.getElementById('tempo').innerHTML="00:00:00";
    cronometroAtivo = false;
}
function contador(){
    segundos++
    if (segundos==60){
         minutos++
        segundos=00}
        if(minutos==60){
            hora++
            minutos=00
        }
   
    document.getElementById('tempo').innerHTML=doisdigitos(hora)+':'+doisdigitos(minutos)+':'+doisdigitos(segundos);
}   