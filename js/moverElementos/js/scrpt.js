
function caiMeteoro (){
    
}
var x = 0
var y = 0
window.addEventListener("keydown",function(event){
    var tecla = event.keyCode
    if ( tecla == "68"){
        x = x + 20
        document.getElementById("object").style.left=x+"px"
    }
     if ( tecla == "65"){
        x = x - 20
        document.getElementById("object").style.left=x+"px"
    }
    if ( tecla == "87"){
        y = y - 20
        document.getElementById("object").style.top=y+"px"
    }
    if ( tecla == "83"){
        y = y + 20
        document.getElementById("object").style.top=y+"px"
    }
})



console.log ("olá mundo")














// var dx;
// var dy;
// var px;
// var py;
// var obj;
// var tmp;
// var vel;
// //Será usado o evento keydown que mostra quando a tecla é pressionada e;
// //keyUp quando a tecla é liberada.



// // É está função que vai inicializar as variáveis globais.
// function iniciar(){
//     dx = 0
//     dy = 
//     px = 0
//     py = 0;
//     obj =document.getElementById("dv1");
//     document.addEventListener("keydown", teclaDw);
//     document.addEventListener("keyup", teclaUp);
//     tmp = setInterval(etenterframe, 20);
//     vel =10;
// }
// function teclaDw(event) {
//     let tecla = event.key;
//     if (tecla === "ArrowLeft") {
//         dx = -1;
//     } else if (tecla === "ArrowUp") {
//         dy = -1;
//     } else if (tecla === "ArrowRight") {
//         dx = 1;
//     } else if (tecla === "ArrowDown") {
//         dy = 1;
//     }
// }

// function teclaUp(event) {
//     let tecla = event.key;
//     if (tecla === "ArrowLeft") {
//         dx = 0;
//     } else if (tecla === "ArrowUp") {
//         dy = 0;
//     } else if (tecla === "ArrowRight") {
//         dx = 0;
//     } else if (tecla === "ArrowDown") {
//         dy = 0;
//     }
// }
// /*
// //Está função é que fará com que o objeto se movimente
// function teclaDw(){
//     var tecla = event.keyCode;
//     if(tecla==37){
//         dx=-1;
//     } else if(tecla==38){
//         dy=-1;
//     }else if(tecla==39){
//         dx=1;
//     }else if(tecla==40){
//         dy=1;
//     }
// }


// //a tecla up irá com com que o objeto parent, já que a distância que ele irá se movimentar é zero.

// function teclaUp(event){
//     var tecla = event.keyCode;
//     if(tecla==37){
//         dx=0;
//     } else if(tecla==38){
//         dy=0;
//     }else if(tecla==39){
//         dx=0;
//     }else if(tecla==40){
//         dy=0;
//     }
// }*/

// //Função que irá ser o coração do movimento e irá atualizar o movimento.

// function etenterframe(){
//     px+=dx*vel;
//     py+=dy*vel;
//     obj.style.left=px + "px";
//     obj.style.top=py + "px";
// }

// window.addEventListener("load", iniciar);

















