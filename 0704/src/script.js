const toDoList = document.getElementById("todo-list");
const toDoInput = document.getElementById("todo-input");
const submitBtn = document.getElementById("submit-btn");
let jobs = [];

submitBtn.addEventListener("click", addToDoJob);

function addToDoJob(event) {
    event.preventDefault(); // submit 후 새로고침 방지

    const toDoJob = toDoInput.value;
    if (toDoJob.trim() === "") {
        console.log("Input is empty");
        return;
    }
    
    // li 태그로 할 일 추가
    const li = document.createElement("li");
    li.classList.add("todo-job");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");

    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = toDoJob;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo-delete");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = deleteToDoJob;
    
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    toDoList.appendChild(li);

    toDoInput.value = "";
}

function deleteToDoJob(event) {
    // delete 버튼 눌렀을 때 해당 li 삭제
    const li = event.target.parentNode;
    li.remove();
}  // question: 이벤트리스너와 function의 위치는 어떻게 두어야하는가?