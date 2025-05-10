let alterar_tema = document.getElementById('alterar_tema')
let body = document.querySelector('body')

alterar_tema.addEventListener('click', ()=>{
    alterar_tema.classList.toggle('dark')
    body.classList.toggle('dark')
})

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('botao-mensagem').addEventListener('click', mostrarMensagem);
});

function mostrarMensagem() {
  document.getElementById('mensagem').innerText = "Seja bem-vindo à página!";
}