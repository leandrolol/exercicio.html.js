const submit = document.getElementById("submit-Valor");

function validaNumero(numeroMenor) {
    const numeroMax = numeroMenor.split('<=10')
    return numeroMax.min <=10;
}

form.addEventListener('submit', function(e){
    e.preventDefault();


    const valorA = document.getElementById("valor-a");
    if (!isNaN(!valorA.value)) {
        alert('Por favor, insira um número válido.');
    }
})
console.log(submit);


