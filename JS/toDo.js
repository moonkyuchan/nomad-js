const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-form input");
const todoList = document.querySelector("#todo-list");

let toDosArray = [];
const TODOS_KEY = "toDo";

function pushTodoList() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDosArray));
}

function deleteTodo(event) {
  const deleteLiTag = event.target.parentElement;
  deleteLiTag.remove();
  console.log(typeof deleteLiTag.id);
  toDosArray = toDosArray.filter((el) => el.id !== parseInt(deleteLiTag.id));
  pushTodoList();
} // 여러가지 todolist들의 항목을 지정해서 삭제해주기 위해 target 설정

function paintTodo(todoValue) {
  const liTag = document.createElement("li");
  liTag.id = todoValue.id;
  todoList.appendChild(liTag);
  const spanTag = document.createElement("span");
  const buttonTag = document.createElement("button");
  liTag.appendChild(spanTag);
  liTag.appendChild(buttonTag);
  spanTag.innerText = todoValue.text;
  buttonTag.innerText = "✖️";
  buttonTag.addEventListener("click", deleteTodo);
}

function handleTodoSubmit(event) {
  event.preventDefault();
  const todoValue = todoInput.value; //todoValue 라는 변수에 value는 위에서 저장시키고
  todoInput.value = ""; //여기서 엔터키 누를시 value 없어짐... 저장값이 사라지는거 아님!
  const todoValueObj = {
    text: todoValue,
    id: Date.now(),
  };
  toDosArray.push(todoValueObj);
  paintTodo(todoValueObj);
  pushTodoList();
}

todoForm.addEventListener("submit", handleTodoSubmit);

const savedToDo = localStorage.getItem(TODOS_KEY);

if (savedToDo) {
  const parsedTodo = JSON.parse(savedToDo);
  toDosArray = parsedTodo;
  parsedTodo.forEach(paintTodo);
}
