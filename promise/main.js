// Cria uma função que retorna uma Promise.
// Essa função recebe como argumento uma URL e faz uma request HTTP
// para essa URL. A Promise resolve se a request tiver sido bem sucedida
// e retorna os dados da resposta da request. Se a request nao for bem 
// sucedida a Promise sera rejeitada.
function getData(url) {
	return new Promise(function (resolve, reject) {
		// Cria uma nova request
		const req = new XMLHttpRequest()
		
		// Cria a request
		req.open('GET', url)

		// Captura o evento de 'onload', que é quando a 
		// request terminou de ser executada.
		req.onload = function () {
			// Checa se o status da request é 200, 
			// o que quer dizer que a request foi bem sucedida.
			if (req.status === 200) {
				// Resolve a Promise retornando a resposta da nossa request
				resolve(req.response)
			} else {
				// Rejeita a Promise retornando os status e texto da request
				reject(req.status, req.statusText)
			}
		}

		// Captura o evento de 'onerror' caso o  não tenha conseguido
		// fazer a request. Geralmente por não estar conectado a internet.
		req.onerror = function () {
			// Rejeita a Promise retornando a string 'Erro de conexão'
			reject('Erro de conexão')
		}

		// Envia a request.
		req.send()
	})
} 

const container = document.getElementById("container")
container.innerHTML = `Carregando...<br> <img src="loading.gif"/>`




// ACESSAR CONTEUDO DENTRO DA API QUE RETORNOU
// já tem acesso a api e agora vamos fazer algo com ele
const acesso = getData("http://revistapolen.com/wp-json/wordpress-popular-posts/v1/popular-posts").then(function(response) {
	
  // pegou resposta que era uma string e transformou em um json
  const jsonResponse = JSON.parse(response)
  container.innerHTML = ""

  for (const post of jsonResponse) {
	//   container.innerHTML = container.innerHTML + "<p>" + post.title.rendered + "<p>"
	//   outra forma de escrever a linha de cima, com aspas:
	container.innerHTML = `${container.innerHTML}<h1>${post.title.rendered}<h1>`
	container.innerHTML = `${container.innerHTML}<p class="link">${post.link}<p>`
	container.innerHTML = `${container.innerHTML}<p>${post.excerpt.rendered}<p>`
	

	//   console.log(post.title.rendered) 
  	// a cada interacao do for tem acesso a cada um dos post
  }
}, function(error) {console.log(error)})