const = documento.getElementById("meuFormulario")

form.addEventListener('submit', function(e) {
e.preventDefault();  

const campoA = parseInt(document.getElementById('campoA').value);  
const campoB = parseInt(document.getElementById('campoB').value); 

if (campoB > campoA) {  
alert('Formulário válido! B é maior que A.');   
} else {  
alert('Formulário inválido! B deve ser maior que A.');  
}
});
console.log(form);

