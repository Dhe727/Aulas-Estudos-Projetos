
function elemento(){document.getElementById ('elemento').innerHTML= 'Olá tudo bem?';}

function ex2(){document.getElementById('ex2').style.color= "red";}

function ex3(){document.getElementById('ex3').style.display="none";}

function ex4(){document.getElementById('ex3').style.display="block";}

function ex5(){document.getElementById ('ex5').innerHTML= 55 + 30;}

function ex6(){ alert(35+45);}

let algumaCoisa = document.querySelector("#algumaCoisa")
let A = 55, B = 49, C = 41;

function ex7(){
    document.getElementById("ex7").innerHTML = 'O resultado da variável é:'+ (A+B+C);
    
}

const car = { modelo: 'ferrari ', valocidadeMaxima: ' 347 km ', anoModelo: 2018  };
function ex8(){document.getElementById('ex8').innerHTML = car.modelo + car.valocidadeMaxima + car.anoModelo + " esse são os dados do objeto";
}
function ex9(){
    document.getElementById('ex9').innerHTML = Date();
}
    
    algumaCoisa.addEventListener("click", (e)=>{
        document.querySelector('#ex10').innerHTML ="alguma coisa";
        corTexto('#ex10');

    })
function corTexto(_corText) {
    document.querySelector(_corText).style.color = "red";
}

const hotel = [' hotel golden ',' hotel platinum ' , ' hotel Bahia ']/// arrey com 3 itens

hotel.push(' hotel florianopolis ')
hotel.push(' hotel ilha ') // usando .push para adicionar um iten   NO FINAL!    do arrey

hotel.unshift('hotel Santa Catarina')//esse método insere um intem NO INICIO do arrey......

const carrinho = [] // criando um novo arrey


carrinho.push(hotel[0])/// pegando um item de um arrey e adicionando em outro!
carrinho.push(hotel[1])
carrinho.push(hotel[2])

carrinho.pop()//  esse medodo remove o ULTIMO elemento de uma arrey!




document.getElementById('ex11')

document.write(hotel['0']+ '<br>');////  aqui estou concatenando uma teg <br>
document.write(carrinho['2']);  // imprimindo o itens do arrey na tela!