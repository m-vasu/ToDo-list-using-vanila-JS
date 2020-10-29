//Selectors
const inputItem = document.querySelector('.todo-input');
const inputButton = document.querySelector('.add-todo');
const listItem = document.querySelector('.list-items');

//Event Listeners
inputButton.addEventListener("click", addTodo);
listItem.addEventListener("click",deleteorcheck);
//Functions
function addTodo(event) {
    event.preventDefault();
    
    const todoDiv = document.createElement("Div");
    todoDiv.classList.add('todo');

    const newTodo = document.createElement('li');
    newTodo.innerText =inputItem.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    const completedButton = document.createElement('button');
    completedButton.innerHTML ='<i class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    todoDiv.appendChild(completedButton);

    const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    listItem.appendChild(todoDiv);
    inputItem.value="";

    
}

function deleteorcheck(e) {
    const removeItem = e.target;
    if(removeItem.classList[0] === "trash-btn"){
        const item =removeItem.parentElement;
        item.remove();

    }
    if(removeItem.classList[0] === "complete-btn"){
        const item =removeItem.parentElement;
        item.classList.toggle("completed");
    }


}