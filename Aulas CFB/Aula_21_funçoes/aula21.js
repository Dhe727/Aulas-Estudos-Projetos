function canal (){
    let n1 = 40
    let n2 = 40
    let res = n1*n2;
    if(res%2 == 0){
    console.log("par")
    }else{
       console.log("impar")
    }
    setInterval(escreve,2000);
}
function escreve(){
    document.write('Eu Amo Programar!!'+"<br>")
}

let resultado = document.querySelector(".btn")
resultado.addEventListener("click",canal);
