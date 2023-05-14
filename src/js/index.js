const botaoAlterarTema = document.getElementById("troca");
const body = document.querySelector("body");
const imagemBotaoTrocaDeTema = document.querySelector(".sun");

botaoAlterarTema.addEventListener("click", () => {
  const modoEscuroEstaAtivo = body.classList.contains("dark");

  body.classList.toggle("dark");

  if (modoEscuroEstaAtivo) {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/sun.png");
  } else {
    imagemBotaoTrocaDeTema.setAttribute("src", "./src/imagens/moon.png");
  }
});
