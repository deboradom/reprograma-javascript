// no console:

function getData(url) {
    return new Promise(function (resolve, reject){
        const req = new XMLHttpRequest() // esse 'new XMLHttpRequest()' é um objeto pronto do javascript, tipo o objeto 'new Date()'

        req.open('GET', url)

        req.onload = function(){
            if (req.status === 200){
                resolve(req.response)
            }else{
                reject(req.status, req.statusText)
            }
        }

        req.onerror = function(){
            reject('Erro de conexão')
        }

        req.send()
    })
}