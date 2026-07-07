
const botao = document.getElementById("modoEscuro");

botao.addEventListener("click", () => {

document.body.classList.toggle("dark");

});

const quiz = document.getElementById("formQuiz");

quiz.addEventListener("submit", function(event){

event.preventDefault();

const resposta = document.querySelector('input[name="resposta"]:checked');

const resultado = document.getElementById("resultado");

if(!resposta){

resultado.innerHTML="Escolha uma resposta.";

return;

}

if(resposta.value==="certo"){

resultado.innerHTML="✔️ Parabéns! Você respondeu corretamente.";

resultado.style.color="green";

}else{

resultado.innerHTML="❌ Resposta incorreta. Sempre verifique a fonte antes de compartilhar.";

resultado.style.color="red";

}

});
