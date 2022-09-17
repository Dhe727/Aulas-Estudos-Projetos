window.addEventListener("load", () => {
    let respostaEscolhida;
    var selected = new Audio('selecionado.mp3');

    const app = document.querySelector("#app");
    const perguntas = {
        titulo: 'Normalmente, quantos litros de sangue uma pessoa tem? Em média, quantos são retirados numa doação de sangue?',
        respostas: [
            'Tem entre 2 a 4 litros. São retirados 450 mililitros',
            'tem entre 4 a 6 litros. São retirados 450 mililitros',
            'tem 10 litros. São retirados 2 litros',
            'tem 7 litros. São retirados 1,5 litros',
            'tem 0,5 litros. São retirados 0,5 litros',
        ],
        correta: '1'
    }
    let respostas = "";
    let modal = `<div id="modal"><div class="content"><h5>Está Certeza:</h5>
        <button class="confirmar">Confirmar</button>
        <button class="voltar">Voltar</button></button>
        </div>
    </div>`;

    perguntas.respostas.forEach((item, i) => {
        respostas += `<div class="resposta" data-resposta="${i + 1}"><div class="quest"><span class="indice"> ${i + 1} </span></div><div class="pergunta"> ${item}</div> </div>`;

    })
    app.innerHTML = `${modal}<div class="logoMarca">Show do Andre</div><div class="titulo">${perguntas.titulo}</div>
    <div class="respostas">${respostas}</div>
    `
    let minhasResposta = document.querySelectorAll(".resposta");

    minhasResposta.forEach((e) => {
        console.log(e.dataset.resposta);
        e.addEventListener("click", (e) => {
            selected.volume = 0.4;
            selected.play();
            for (let i = 0; i < minhasResposta.length; i++) {
                minhasResposta[i].classList.remove("corretaCor")
            }
            clickResposta(e)
        })
    })
    let salvaUsuario = document.querySelector("#salvar");
    let usuario = document.querySelector("#usuario");
    salvaUsuario.addEventListener("click", () => {
        localStorage.setItem("usuario", usuario.value)
    })
    function clickResposta(e) {

        switch (e.currentTarget.dataset.resposta) {
            case '1':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "1"
                break;
            case '2':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "2"
                break;

            case '3':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "3"
                break;

            case '4':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "4"
                break;
            case '5':
                e.currentTarget.classList.add("corretaCor");
                respostaEscolhida = "5"
                break;


            default:
                break;
        }


    }
})