const form = document.getElementById('meuFormulario');

function validaCampo (campoMaior){
    const numeroComoArray = campoB.value > CampoC.value
    return numeroComoArray.value 
}

form.addEventListener('submit', function(e){
    e.preventDefault();

    const campoB = parseInt (document.getElementById('campoB').value);
    const CampoC = parseInt (document.getElementById('CampoC').value);

    if (!validaCampo(campoB.value > CampoC.value)){
        alert("Campo B não pode ser menor que Campo C ");
    }else{
        alert("Continuar");
    }
});

console.log(form);
