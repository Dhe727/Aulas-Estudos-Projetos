window.addEventListener("load", ()=> {
    let menuPrincipal = document.querySelector("#menu-principal");
    let startGame = document.querySelector("#startGame");
    let areaSelecao = document.querySelector("#areaSelecao"); 
    let obi = document.querySelector("#obiwan");
    let dart = document.querySelector("#dart");
    let fundo = document.querySelector("body");
    let cor2 = "red";
    let cor1 = "green";
    let nameChar1 = document.querySelector("#nameChar1");
    let nameChar2 = document.querySelector("#nameChar2");

    let personagens = [];
    //startSound(0)
    startGame.addEventListener("click",()=> {
        startSound(1);
        let valor = 1;
        let apagaMenu = setInterval(()=> {
            if (valor > 0) {
                valor -= 0.1;
            menuPrincipal.style.opacity = valor;
            }
            else {
                showSelectChar();
                clearInterval(apagaMenu);
                menuPrincipal.style.display ="none";
            }
        },50);
    });
    obi.addEventListener("click", (e)=> {
        startSound(1);
        obi.style.border ="5px solid";
        obi.style.width = "195px";
        obi.style.height = "195px";
        obi.style.backgroundSize = "100%";
        personagemSelecionado(e.currentTarget.id, obi);
    });
    dart.addEventListener("click", (e)=> {
        startSound(1);
        dart.style.border ="5px solid";
        dart.style.width = "195px"
        dart.style.height = "195px"
        dart.style.backgroundSize = "100%";
        personagemSelecionado(e.currentTarget.id,dart);
    });
    function showSelectChar() {
        let valor = 0;
        let chamaMenu = setInterval(()=> {
            if (valor < 1) {
                valor += 0.1;
                areaSelecao.style.display = "block";
                areaSelecao.style.opacity = valor;
            console.log
            }
            else {
                clearInterval(chamaMenu);
            }
        },50); 
    }
    function personagemSelecionado(selected,obj) {
        if(personagens.length == "" || personagens.length < 2){
            personagens.push(selected);
            if(personagens.length == 1) {
                obj.style.borderColor = cor1;
            } else {
                obj.style.borderColor = cor2;
            }
            if(personagens.length > 1){
                console.log(personagens[0] + " VS " + personagens[1] );
                nameChar1.innerHTML = personagens[0];
                nameChar2.innerHTML = personagens[1];

                fundo.style.backgroundImage = "url('/assets/cenario.jpg')";

            }
        } else {
            console.log("ja foram escolhido 2")
        }
    }
    function startSound(sound){
        switch (sound) {
            case 1:
                var audio = new Audio('assets/sabre.mp3');
                audio.play();
                break;        
            default:
                break;
        }
        
    }
})
