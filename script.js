function toggleMode(){
  // Declarando variável html e atribuindo o Root Element (tag html) do documento a ela
  const html = document.documentElement

  // Função de alternar o light mode
  html.classList.toggle("dark")

  // Declarando variável img e atribuindo a tag "img" a ela
  const img = document.querySelector("#profile img")

  // Condicional para alternar a imagem de acordo com o modo (dark/light)
  if (html.classList.contains("dark")) {
    img.setAttribute("src", "./assets/avatar.png")
    img.setAttribute("alt", "Foto de Hugo Herrera com um moletom preto, sorrindo, usando um óculos dourado hexagonal")
  } else {
    img.setAttribute("src", "./assets/avatar-light.png")
    img.setAttribute("alt", "Foto de Hugo Herrera com uma blusa branca, sorrindo, usando um óculos preto quadrado")
  }
}