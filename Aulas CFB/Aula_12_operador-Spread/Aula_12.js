

//__________________________________________________________________________________________________________

// Operador Spread, aprendendo sobre o espalhador... Aula 12



const exemplo1 =document.getElementsByTagName("h1"); // aqui vamos chamar um HTMLCollection
const exemplo2 =[...document.getElementsByTagName("h1")];// aqui vamo obter um arrey,usando operador spread


exemplo2.forEach(element => {
  console.log(element);
  element.innerHTML="André Gostoso"; // nesse exemplo estou usando a função forEach para percorrer os
});                                  // do arrey e mudar seu texto com innerHTML


// console.log(exemplo1)
// console.log(exemplo2)

//__________________________________________________________________________________________________________

 const soma=(v1,v2,v3)=>{
   return v1+v2+v3
 }

 let valores =[1,2,3];

 console.log(soma(...valores)) // aqui usamos o espread para espalhar os valores de um arrey para esxecutar
                              // a função de |Soma!!


//__________________________________________________________________________________________________________
const jogador1 ={nome: "André", vida: 100, energia:200, velocidade:250, magia: 300}
const jogador2 ={nome: "bruno", vida: 200, energia:300}
const jogador3 ={...jogador1,...jogador2} ///  <-- Aqui estamos usando o spread de outra maneira veja o 
                                          ///      para recordar
console.log(jogador3)                   

let n1 =[10,20,30,40]
let n2 =[11,22,33,44,55]
let n3 =[...n1,...n2] //   <-- Aqui estamos espahando o arrey n1 e n2 dentro de n3
                    
console.log(n2);
console.log("tipo de n3: "+ typeof(n2));
console.log(n3);
console.log("tipo de n3: "+ typeof(n3)); /// estou mostrando o tipo com typeof