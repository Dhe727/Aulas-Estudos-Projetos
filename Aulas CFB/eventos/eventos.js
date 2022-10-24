window.addEventListener('load',()=>{
    const teste = [...document.querySelectorAll(".teste")];
    teste.map((el,i)=>{
        el.addEventListener('click',()=>{
            console.log(el.textContent + " A casa clicada foi a da posição  "+ (i + 1) )
            el.textContent = "x"
            el.classList.add('destaque')
            

        })
    })

    // let c1=document.getElementById("c1");
    // c1.addEventListener("click",()=>{
    //     alert("clicou!");
    // })
    // let c2 =document.getElementById("c2")
    // c2.addEventListener("dblclick",()=>{
    //     alert("clicou 2 vezes aqui!");
    //     c2.style.color = 'red';
    //     c2.style.backgroundColor= "black"
        
    //     c2.textContent ="clicou 2 vezes aqui!";
    // });
    // let c3=document.getElementById('c3')
    // c3.addEventListener('click',fc3)

    // function fc3(e){
    //     console.log(e.target);
    //     elemento = e.target;
    //     elemento.classList.add("destaque");
    // }
});