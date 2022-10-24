window.addEventListener("load", () => {


    let vezDejogar = "o"
    let joga1 = '<img src="img-X.png"></div>'
    let joga2 = '<img  src="img-O.png"></div>'


    let casas = [...document.querySelectorAll(".div")]
    casas.map((elemento, indice) => {
        elemento.addEventListener("click", (indice) => {
            
            console.log(indice)

            if (vezDejogar == "x") {
                elemento.innerHTML = 'x';
                vezDejogar = "o"
                indice = "x"
               


            } else {
                elemento.innerHTML = joga2
                vezDejogar = "x"
            }

        });



    });

    




























});