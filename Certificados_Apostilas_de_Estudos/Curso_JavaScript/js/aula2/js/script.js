window.addEventListener("load", ()=> {

    const el = document.querySelector("#text")
    const text = (" 1. Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?");
    const interval = 50;

   function Showtext(el, text, interval){

    const char = text.split("").reverse();

    const typer = setInterval(() => {

        if(!char.length) {
            return clearInterval(typer);        
        }
        const next = char.pop();

        el.innerHTML += next;
    },interval);

 } 
 
 Showtext(el, text, interval);

})
 








