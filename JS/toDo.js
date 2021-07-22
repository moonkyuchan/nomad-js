const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

function deleteTodo(event) {
  const deleteLiTag = event.target.parentElement;
  deleteLiTag.remove();
} // 여러가지 todolist들의 항목을 지정해서 삭제해주기 위해 target 설정

function paintTodo(todoValue) {
  const liTag = document.createElement("li");
  todoList.appendChild(liTag);
  const spanTag = document.createElement("span");
  const buttonTag = document.createElement("button");
  liTag.appendChild(spanTag);
  liTag.appendChild(buttonTag);
  spanTag.innerText = todoValue;
  buttonTag.innerText = "✖️";
  buttonTag.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value; //todoValue 라는 변수에 value는 위에서 저장시키고
  todoInput.value = ""; //여기서 엔터키 누를시 value 없어짐... 저장값이 사라지는거 아님!
  paintTodo(todoValue);
}

todoForm.addEventListener("submit", handleTodoSubmit);
