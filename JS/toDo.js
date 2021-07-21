const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function paintTodo(todoValue) {
  const liTag = document.createElement("li");
  const spanTag = document.createElement("span");
  liTag.appendChild(spanTag);
  spanTag.innerText = todoValue;
  todoList.appendChild(liTag);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value; //todoValue 라는 변수에 value는 위에서 저장시키고
  todoInput.value = ""; //여기서 엔터키 누를시 value 없어짐... 저장값이 사라지는거 아님!
  paintTodo(todoValue);
}

todoForm.addEventListener("submit", handleTodoSubmit);
