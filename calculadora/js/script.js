let botoes = document.querySelectorAll(".btn");
let visor = document.querySelector("#visor");

// isso serve pra botar um escutador em cada botao
botoes.forEach((iten,i) => {
    iten.addEventListener("click",function(e){

        console.log(e.currentTarget.innerHTML);
        if(e.currentTarget.innerHTML != "Enter" && e.currentTarget.innerHTML != "c"){
            visor.value += e.currentTarget.innerHTML;
        } else if(e.currentTarget.innerHTML == "c"){
            visor.value ="";
        }        
        else {
            visor.value = eval(visor.value);
        }
    });
});