document.addEventListener("DOMContentLoaded", () => {

  document.addEventListener("submit", function(event){
    event.preventDefault(); 
    const textBox = document.getElementById("new-task-description").value
    const li = document.createElement("li")
    const button = document.createElement("button")
    const ul = document.getElementById("tasks")
    
    button.innerText = "Delete"
    li.innerText = textBox

    li.append(button)
    ul.append(li)

    button.addEventListener("click", f => button.parentElement.remove())
  })
})

