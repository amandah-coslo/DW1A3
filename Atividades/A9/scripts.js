var box_preview = document.getElementById("preview-br");

var input_tl = document.getElementById("input-tl");
var input_tr = document.getElementById("input-tr");
var input_br = document.getElementById("input-br");
var input_bl = document.getElementById("input-bl");
var btn_copy = document.getElementById("btn-copy");

input_tl.onchange = atualizarPreview;
input_tr.onchange = atualizarPreview;
input_br.onchange = atualizarPreview;
input_bl.onchange = atualizarPreview;
btn_copy.onclick = copiarPropriedade;

function atualizarPreview(){
	validarCampos();

	var propriedade = "border-radius: " + 
		input_tl.value + "px " + input_tr.value + "px " + input_br.value + "px " + input_bl.value + "px;";

	console.log("Propriedade: " + propriedade);

	document.getElementById("input-btn").value = propriedade;

	box_preview.style = propriedade;
}

function validarCampos(){
	var inputs = [
		input_tl,
		input_tr,
		input_br,
		input_bl
	];
	for(valor of inputs){
		if(valor.value.length === 0 || valor.value < 0)
			valor.value = 0;
		else if(valor.value > 150)
			valor.value = 150;
	}
}

function copiarPropriedade(){
	var input_propertie = document.getElementById("input-btn");
	if(input_propertie.value.length === 0) return;

	input_propertie.select();
	input_propertie.setSelectionRange(0, 99999);
	document.execCommand("copy");
}