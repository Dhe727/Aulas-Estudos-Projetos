var pacientes = document.querySelectorAll(".paciente");
for(var i = 0; i < pacientes.length; i++){

    var paciente = pacientes[i];



var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdAltura = paciente.querySelector(".info-altura");
var altura = tdAltura.textContent;

var tdImc = paciente.querySelector(".info-imc");



var alturaValida = true
var pesoValido = true


if ((peso <= 0) || (peso >= 500)) {
    pesoValido = false
    tdImc.textContent = "Peso inválido"
   paciente.classList.add("dadosInvalidos")
}
if ((altura <= 0) || (altura >= 3)) {
    alturaValida = false
    tdImc.textContent = "Altura inválido"
    paciente.classList.add("dadosInvalidos")  
}

if (alturaValida && pesoValido) {
    
    var imc =  calculaImc(peso,altura)
    tdImc.textContent = imc;
    }
}
function calculaImc (peso,altura){
    var imc = 0;
    imc = peso / (altura * altura);
    return imc.toFixed(2);
}