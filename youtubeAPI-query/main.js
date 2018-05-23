// Buscar o link de request no site da documentacao da API
// https://developers.google.com/youtube/v3/docs/search/list#examples


// Gerar uma key pra acessar a API do youtube v3 em "www.googleapis.com"
// adicionar a key no final do código abaixo, respeitando os parâmetros anteriores, que são separados por '&'
// https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=beyonce&key=**********************************

// Capturar o elemento formulario (pra depois pegar o elemento digitado no input do formulario)
const formulario = document.querySelector("form")
// Adicionar um eventListener do tipo "submit" no formulário. O eventListener não é no input, pq o botão de "enviar" em sempre referente ao formulario enquanto coleção de inputs.
const busca = document.querySelector("input")
// Capturar texto do input
const buscaTexto = busca.value
const resultados = document.getElementById("results")

formulario.addEventListener("submit", function (event) {
  // Nao permitir comportamento padrao do navegador de recarregar a página
  event.preventDefault()
  
  resultados.innerHTML = "<p>Carregando...</p>"

//   console.log(buscaTexto)
getData(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${buscaTexto}&key=AIzaSyCUZU-IZ8rKI7iKbWjzRdGLtIwLDsQhVAM`).then(function(response){
  // console.log(typeof response) // mostra que o 'response' está retornando um elemento do tipo string, só que a gente precisa de um JSON
  const jsonDados = JSON.parse(response)
  // console.log(typeof jsonDados)
  
  resultados.innerHTML = ""
  
  // console.log(jsonDados.items)
  
  for (const cadaResultado of jsonDados.items) {
    results.innerHTML = results.innerHTML + `
      <a target="_blank" href=https://www.youtube.com/watch?v=${cadaResultado.id.videoId}>
        <h1>${cadaResultado.snippet.title}</h1>
        <p>${cadaResultado.snippet.description}</p>
      
      </a>
    `

    console.log(cadaResultado.snippet.title)
    console.log(cadaResultado.snippet.description)
    console.log("https://www.youtube.com/watch?v=" + cadaResultado.id.videoId)
    // resultados.innerHTML = `${resultados.innerHTML}<h1>${cadaResultado.snippet.title}<h1>`
    // resultados.innerHTML = `${resultados.innerHTML}<p>${cadaResultado.snippet.description}<p>`
    // resultados.innerHTML = `${resultados.innerHTML}<p>${"https://www.youtube.com/watch?v=" + cadaResultado.id.videoId}<p>`
    
    console.log(resultados.innerHTML)
    //   resultados.innerHTML = `${resultados.innerHTML}<p>${items.description}<p>`
    
  }
}, function(error) {console.log(error)})

})
