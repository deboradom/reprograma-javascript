// .js source http://reprograma-todolist.surge.sh/
// (from https://github.com/brizental/reprograma-javascript)


const inputForm = document.getElementById("input")
inputForm.addEventListener("submit", event => {
  event.preventDefault()
  const todoInput = document.querySelector("#input input")
  const todoText = todoInput.value
  if(todoText !== "") {
    addNewTodo(todoText)
    todoInput.value = ""
  }
})

const addNewTodo = todoText => {
  const todoList = document.getElementById("list")
  const newTodoItem = document.createElement("li")
  const newTodoItemText = document.createTextNode(todoText)
  newTodoItem.appendChild(newTodoItemText)
  todoList.appendChild(newTodoItem)
  // Every new todo must be linked to a listener to the click event
  markAsDoneEvent(newTodoItem)
}

const markAsDoneEvent = node => {
  node.addEventListener("click", event => {
    if (!event.target.classList.contains("done"))
      event.target.classList.add("done")
  })
}