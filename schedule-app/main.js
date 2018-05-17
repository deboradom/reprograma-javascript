// json:

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

// Um jeito de chamar as horario do JSON isoladas
// for (var horario in appointments){
//   console.log(horario + " - " + appointments[horario].title + " - " + appointments[horario].person)
// }


// for (var horario in appointments){
//   console.log(horario)
// }
// // é igual a:
// for(var i = 0; i < Object.keys(appointments).length ; i++){
//   console.log(Object.keys(appointments)[i])
// }


// Dá pra chamar cada uma das três horario individualmente...
// // ----- horario
// for (var horario in appointments){
//   console.log(horario)
// }

// // ----- aula
// for (var horario in appointments){
//   console.log(appointments[horario].title)
// }

// // ----- professor
// for (var horario in appointments){
//   console.log(appointments[horario].person)
// }


// ... ou chamá-las juntas dentro do mesmo 'for'
for (var horario in appointments){

  // Isolar os dados do JSON e visualizá-los no console.log pra verificar se estão sendo isolados corretamente
  // console.log(horario)
  // console.log(appointments[horario].title)
  // console.log(appointments[horario].person)

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
  timeP.textContent = horario
  tarefa.textContent = appointments[horario].title
  pessoa.textContent = appointments[horario].person
  
  //Pintar bolinha correspondente ao horário de vermelho
  var date = new Date()
  var hour = date.getHours()

  console.log(horario.split("h")[0])
  console.log(hour)
  console.log(horario.split("h")[0] <= hour)

  if (parseInt(horario.split("h")[0]) <= hour){
    
    circle.classList.add("filled")
    console.log("entrou")
  }
}