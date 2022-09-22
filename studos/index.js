// const resultado = fizzbuzz(15)
// function fizzbuzz(entrada){

//     if(typeof entrada !== 'number'){
//         console.log("não é um numero");
//     }else if((entrada %3 === 0) && ( entrada %5 === 0)){
//         console.log("FizzBuzz") ;      
//     }else if(entrada % 3 === 0){
//         console.log("Fizz");
//     }else if(entrada % 5 === 0){
//         console.log("Buzz");
//     }else{
//         console.log(entrada);
//     }
// }

// velocidadeMaxima(155);

// function velocidadeMaxima(velocidade){
//     let pontuação = (velocidade -70) / 5;
//     if(velocidade <= 70){
//         console.log("velocidade ok!")
//     }
//     else if(velocidade > 70 && pontuação > 12){
//         console.log("carteira perdida");
//     }
//     else {
//         console.log("Você perdeu "+Math.floor(pontuação)+ " Na carteita de habilitção")
//     }
// }
// valorEscolhido (10);

// function valorEscolhido(parada){

//     for(i = 0; i <= parada ; i++ ){
//         if(i % 2 == 0){
//             console.log(i +" par");
//         }else{
//             console.log(i +" impar");
//         }
//     }
// }

// const filme = {

//     titulo: "homem aranha",
//     ano: 2018,
//     diretor: "felipe Nato",
//     personagem: "hulk"

// }
// mostraPropriedadesObjeto(filme);

// function  mostraPropriedadesObjeto(obj){
//     for(prop in obj)
//     if(typeof obj[prop] === "string"){
//         console.log(prop,obj[prop])
//     }
// }



// somamultiplos(10)

// function somamultiplos(limite){
//     let multplosde3 =0;
//     let multiplosde5 =0;
//     for(i = 0; i <= limite; i++){
//        if(i% 3 === 0)
//         multplosde3 += i;

//        if(i % 5 === 0)
//         multiplosde5 += i;


//     }

//     let res =  multiplosde5 + multplosde3;
//     console.log(res);

// }

// const array = [20, 20, 20, 20];

// console.log(mediaNotas(array));

// function mediaNotas(notas) {
//     let soma = 0;
//     for (let nota of notas) {                    
//         soma += nota;
//     }
//     const media = soma/(notas.length);

//     if(media  < 59) return "F";
//     if(media  < 69) return "D";
//     if(media  < 79) return "C";
//     if(media  < 89) return "B";
//     return "A";

// }

// encontraNumPrimo(105);

// function encontraNumPrimo(limite) {
    
//     for (let numero = 2; numero <= limite; numero++) {
//         let ehPrimo = true;

//         for (let divisor = 2; divisor < numero; divisor++) {
//             if (numero % divisor === 0) {
//                 ehPrimo = false
//                 break;
//             }
            
//         }
//         if (ehPrimo)console.log(numero);
//     }


// }