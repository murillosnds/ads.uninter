let temas = document.getElementById('temas')
let body = document.querySelector('body')

temas.addEventListener('click', ()=>{
    temas.classList.toggle('dark')
    body.classList.toggle('dark')
})

function mostrarMensagem() {
      const mensagem = "Bem-vindo a minha página!";
      document.getElementById("mensagem").textContent = mensagem;
    }