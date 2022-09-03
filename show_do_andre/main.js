window.addEventListener("load", () => {
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
    perguntas.respostas.forEach((item, i) => {
        respostas += `<div class="resposta" data-resposta="${i + 1}"><span class="indice"> ${i + 1} </span> ${item} </div>`;
    })
    app.innerHTML = `<div class="titulo">${perguntas.titulo}</div>
    <div class="respostas">${respostas}</div>
    `
    let minhasResposta = document.querySelectorAll(".resposta")
    minhasResposta.forEach((e) => {
        console.log(e.dataset.resposta);
        e.addEventListener("click", (e) => {
            clickResposta(e)
        })
    })
    let salvaUsuario = document.querySelector("#salvar");
    let usuario = document.querySelector("#usuario");
    salvaUsuario.addEventListener("click",()=>{
        localStorage.setItem("usuario", usuario.value)
    })
})
function clickResposta(e) {
    switch (e.currentTarget.dataset.resposta) {
        case '1':
            e.currentTarget.classList.add("corretaCor");
            break;
        case '2':
            e.currentTarget.classList.add("corretaCor");
            break;

        case '3':
            e.currentTarget.classList.add("corretaCor");
            break;

        case '4':
            e.currentTarget.classList.add("corretaCor");
            break;


        default:
            break;
    }
    

}