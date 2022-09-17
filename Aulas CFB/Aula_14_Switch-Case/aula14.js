let posicao = 2


function resultado2() {
    const escrever = [...document.getElementsByTagName("h1")];
    escrever.forEach(element => {
        console.log(element);
        element.innerHTML = "perdedor!!!"
    });
}


function resultado() {
    const escrever = [...document.getElementsByTagName("h1")];
    escrever.forEach(element => {
        console.log(element);
        element.innerHTML = "voce ganhou"
    });
}

switch (posicao) {

    case 1:
        resultado();
        break

    case 2:

        resultado2();
        break

    default:
}