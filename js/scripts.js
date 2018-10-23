$(document).ready(function () {
    $('.mdb-select').materialSelect();
});

function ejecutar() {

	var altura = document.getElementById('personHeight').value;
	var peso = document.getElementById('personWeight').value;
	var genero = document.getElementById('gender').value;
	var constitucion = document.getElementById('physicalConstitution').value;
	var metro = altura / 100;
	metrodoble = metro * metro;
	var imc = peso / metrodoble;
	var alturapeso = altura - 100;

	if (genero == 1) {
		var pesoideal = alturapeso * 0.85;
	} else if (genero == 2) {
		var pesoideal = alturapeso * 0.90;
	} else {
		var pesoideal = "No Selecciono Genero";
	}

	if (imc <= 19) {
		var estado = "Desnutrido";
	} else if (imc >= 24) {
		var estado = "Sobrepeso";
	} else {
		var estado = "Peso Normal";
	}

	var bodyMass = document.getElementById('bodyMass');
	bodyMass.value = imc;
	var idealWeight = document.getElementById('idealWeight');
	idealWeight.value = pesoideal;
	var imcObtain = document.getElementById('imcObtain');
	imcObtain.value = estado;

}