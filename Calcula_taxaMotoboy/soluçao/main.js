window.addEventListener("load", ()=>{


let listaTaxas = [];
const valorTaxa = document.querySelector("#valorTaxa");
const soma = document.querySelector(".fa-plus-circle");

const taxasValor = document.querySelector("#taxasValor")
const total = document.querySelector(".total")
let criaValor = "";

window.addEventListener("keydown", (e) => {
    if(e.key === "Enter"){
        criaValor = valorTaxa.value;
    if(criaValor != ""){
        listaTaxas.push(criaValor);
        valorTaxa.value ="";
    }
    taxasValor.innerHTML ="";
    criaItems (listaTaxas);
    }
});

soma.addEventListener("click", ()=> {
    criaValor = valorTaxa.value;
    if(criaValor != ""){
        listaTaxas.push(criaValor);
        valorTaxa.value ="";
    }
    taxasValor.innerHTML ="";
    criaItems (listaTaxas);
    
});
criaItems = (_listaTaxas)=> {
    
    taxasValor.innerHTML ="";
    _listaTaxas.forEach((valor,indice)=>{
        let newValor = parseInt(valor).toFixed(2)
        taxasValor.innerHTML += `<div class="col-10 offset-1 geraItem">
        <div class="col-12 item" >R$ ${newValor} <i class="fas fa-minus-circle" data-data="${indice}"></i></div>
        </div>`
        let subtrai = document.querySelectorAll(".fa-minus-circle");
        subtrai.forEach((e)=>{
            e.addEventListener("click", (e)=> {
                let indice = e.currentTarget.dataset.data;
                subtraiValores(indice)
            });
        })
    })
    somaValores(listaTaxas)
}
somaValores = (_taxas)=> {
    total.innerHTML = "";
    let newValores = 0;
    _taxas.forEach((valor)=>{
        newValores += parseInt(valor); 
        
    })
    total.innerHTML = `Total: R$ ${newValores.toFixed(2)}`
}
subtraiValores = (_indice)=> {
    let indice = parseInt(_indice)
    listaTaxas.splice(indice,1);
    criaItems(listaTaxas)
}
});


