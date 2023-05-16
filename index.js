const naoBtn = document.getElementById("nao");
const simBtn = document.getElementById("sim");
const mensagem = document.getElementById("mensagem");


naoBtn.addEventListener("mouseover", () => {
  const x = Math.floor(Math.random() * window.innerWidth);
  const y = Math.floor(Math.random() * window.innerHeight);
  naoBtn.style.position = "absolute";
  naoBtn.style.left = `${x}px`;
  naoBtn.style.top = `${y}px`;
});

simBtn.addEventListener("click", function(){
  mensagem.innerText ="Você aceitou rs ❤️ ... Que Deus lhe conceda paciência de hoje em diante, aqui não trabalhamos com devolução" 
});