function getRandomColorsBia(){
    var colors = ["black", "grey", "blue", "red", "green", "yellow"]
    var index = Math.floor(Math.random() * colors.length)
    // Math.randon retorno um numero decimal, e o Floor arredonda esse numero pra baixo, transoformando ele em inteiro. 
    // O index precisa ser número inteiro porque vai ser o indice do array de cores.
    return colors[index]
}



var bars = document.querySelectorAll(".progress") // Cria um array contendo todas as div's com a classe 'progress'

for (const item of bars){ // Pra fazer loop em um objeto, usar "for...in"; pra fazer loop em um array (este caso), usar "for...of"
    
    // var percen0 = bars.getAttribute("data-percentage")
    
    // var p = item.dataset.percentage
    // outro jeito de chamar o atributo 'data'
    // var p2 = item.getAttribute("data-percentage")
    // console.log(p)
    // console.log(p2)
    
    const H = document.createElement("h1")
    H.textContent = item.dataset.percentage + "%"
    // console.log(H) // mostra que todos os <h1> e todas as data-percentage foram criadas
    item.appendChild(H) // coloca H como filha de cada 'item'

    const L = document.createElement("div")
    L.classList.add("div")
    // console.log(L)
    item.appendChild(L) // coloca L como filha de cada 'item'

    item.querySelector("div.div").style.backgroundColor = getRandomColorsBia()
    // item.querySelector("div.div").style.width = item.dataset.percentage + "%"  // Se eu colocar setTimeout(function(), tempo) nessa linha, a 'propriedade' transition do css funciona, pq ele identifica que a width partiu do 0 e mudou pra outro valor, dando espaço pra transição 
    setTimeout(() => {
        item.querySelector("div.div").style.width = item.dataset.percentage + "%"
    }, 50)
}   


    //     var pText = document.createElement("h1")
//     // pText.textContent = pText.dataset.percentage

//     // pText.dataset.percentage

//     // bars.appendChild(pText)
//     console.log(pText)





