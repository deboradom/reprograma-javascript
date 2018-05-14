document.getElementById("input").addEventListener("submit", addNovoItem) //Se eu tivesse chamado a função com os parenteses (ou seja, "adicionar()"), ela executaria nessa linha. Mas como eu quero que ela execute depois que o evento 'submit' for 'ouvido', posso soh colocar ela aqui dentro pelo nome, e por ser o segundo parametro do listenner, ela é uma função callback, que vai ser executada depois

function addNovoItem(){
    event.preventDefault(); // isso impede que o browser recarregue
    // alert("Hey!") // Esse alert precisa aparecer quando eu der enter no input.
    
    const valor = document.querySelector("input").value;
    console.log(valor);
    
        if(valor !== ""){
            const item = document.getElementById("list")
            const li = document.createElement("li")
            li.addEventListener("click", addRisco) //*

            li.innerHTML = valor
            item.appendChild(li)         
            document.querySelector("input").value = "" // Não posso substituir essa linha por "valor", porque eu quero chamar de string vazio o resultado referente ao queryselector.value 


        }
}

// Funcao que adiciona o traço de sobreescrito nas tarefas clicadas. 
function addRisco(x){
    // console.log(event) // Esse console.log serve pra mostrar qual evento chama a função addRisco. Ele vai criar um MouseEvent no console, devo explorar até achar o atributo "target", e verificar se ele está relacionado à tag certa.
    event.target.classList.add("done")
}

Outro 


