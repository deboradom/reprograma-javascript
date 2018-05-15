var appointments = {
  "06h30": {
    "title": "HIIT",
    "person": "Michael Goulart"
  },
  "07h00": {
    "title": "Zumba",
    "person": "Mariana Silva"
  },
  "07h30": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "08h00": {
    "title": "Fit Dance",
    "person": "Victor Bonifácio"
  },
  "08h30": {
    "title": "Gap",
    "person": "Michael Goulart"
  },
  "18h00": {
    "title": "Power Jump",
    "person": "Alvaro Bigaton"
  },
  "18h30": {
    "title": "Zumba",
    "person": "Mariana Silva"
  },
  "19h00": {
    "title": "HIIT",
    "person": "Victor Bonifácio"
  },
  "19h00": {
    "title": "Jiu-Jitsu",
    "person": "Beto Almeida"
  },
  "19h30": {
    "title": "Abdominal",
    "person": "Michael Goulart"
  },
  "20h00": {
    "title": "Fit Dance",
    "person": "Evandro Almeida"
  },
  "20h30": {
    "title": "Glúteos",
    "person": "Mariana Silva"
  }
}

// Um jeito de chamar as propriedades do JSON isoladas
// for (var propriedades in appointments){
//   console.log(propriedades + " - " + appointments[propriedades].title + " - " + appointments[propriedades].person)
// }


// for (var propriedades in appointments){
//   console.log(propriedades)
// }
// // é igual a:
// for(var i = 0; i < Object.keys(appointments).length ; i++){
//   console.log(Object.keys(appointments)[i])
// }


// Dá pra chamar cada uma das três propriedades individualmente...
// // ----- horario
// for (var propriedades in appointments){
//   console.log(propriedades)
// }

// // ----- aula
// for (var propriedades in appointments){
//   console.log(appointments[propriedades].title)
// }

// // ----- professor
// for (var propriedades in appointments){
//   console.log(appointments[propriedades].person)
// }

// ... ou chamá-las juntas dentro do mesmo 'for'
for (var propriedades in appointments){

  // Isolar os dados do JSON e visualizá-los no console.log pra verificar se estão sendo isolados corretamente
  // console.log(propriedades)
  // console.log(appointments[propriedades].title)
  // console.log(appointments[propriedades].person)

 // Criar todas as tags de HTML
  var appointment = document.createElement("div")
  appointment.classList.add("appointment")
  var timeDiv = document.createElement("div")
  timeDiv.classList.add("time")
  var timeP = document.createElement("p")
  var circle = document.createElement("div")
  circle.classList.add("circle")
  var event = document.createElement("div")
  event.classList.add("event")
  var tarefa = document.createElement("h2")
  var pessoa = document.createElement("p")
  
  // Criar a hierarquia entre as tags, relacionando o que está dentro do que
  document.getElementById("schedule").appendChild(appointment)

  appointment.appendChild(timeDiv)
  appointment.appendChild(circle)
  appointment.appendChild(event)
  event.appendChild(tarefa)
  event.appendChild(pessoa)
  timeDiv.appendChild(timeP)
 
  // Inserir os dados do JSON dentro das tags criadas
  timeP.textContent = propriedades
  tarefa.textContent = appointments[propriedades].title
  pessoa.textContent = appointments[propriedades].person
  
}



