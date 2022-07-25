const input = document.querySelector('.loginInput');
const button = document.querySelector('.button');
const form = document.querySelector('.loginForm');

const validacaoinput = ({target}) =>{
     if(target.value.length > 2){
        button.removeAttribute("disabled")
       } else {
            button.setAttribute("disabled" ,'');
        }}  
   
    const handleSubmit = (event)=>{
        event.preventDefault()
        localStorage.setItem('player',input.value);
        window.location = 'pg2/game.html';
        


    }


input.addEventListener("input",validacaoinput);
form.addEventListener("submit",handleSubmit);