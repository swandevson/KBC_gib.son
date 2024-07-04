const toDoList = document.getElementById("todo-list");
const toDoInput = document.getElementById("todo-input");
const submitBtn = document.getElementById("submit-btn");
let jobs = [];

submitBtn.addEventListener("click", addToDoJob);

function addToDoJob(event) {
    event.preventDefault(); // submit 후 새로고침 방지

    const todoJob = toDoInput.value;
    console.log(todoJob);
    
    // li 태그로 할 일 추가
    const li = document.createElement("li");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");

    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = todoJob;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo-delete");
    deleteBtn.textContent = "X";
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    toDoList.appendChild(li);
}

function showToDoJobs() {
    console.log(jobs);
    
}