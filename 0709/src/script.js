const toDoList = document.getElementById("todo-list");
const toDoInput = document.getElementById("todo-input");
const submitBtn = document.getElementById("submit-btn");

const jobMap = new Map();

submitBtn.addEventListener("click", addToDoJob);

// Load jobs from local storage on page load
window.addEventListener("load", loadJobsFromLocalStorage);

function addToDoJob(event) {
    event.preventDefault(); // prevent page refresh after submit

    const toDoJob = toDoInput.value;
    if (toDoJob.trim() === "") {
        console.log("Input is empty");
        return;
    }

    const job = {
        id: Date.now().toString(),
        text: toDoJob,
    };

    // Save jobs to local storage
    saveJobsToLocalStorage(job);
    addJobToHTML(job);
}

function addJobToHTML(job) {
    // Create li element for the job
    const li = document.createElement("li");
    li.classList.add("todo-job");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.classList.add("todo-checkbox");

    const span = document.createElement("span");
    span.classList.add("todo-text");
    span.textContent = job.text;;

    const deleteBtn = document.createElement("button");
    deleteBtn.classList.add("todo-delete");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = deleteToDoJob;

    li.dataset.id = job.id;
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);

    toDoList.appendChild(li);

    toDoInput.value = "";
}

function deleteToDoJob(event) {
    const li = event.target.parentNode;
    li.remove();

    // Remove job from the jobs array
    const jobId = li.dataset.id;

    jobMap.delete(jobId);

    // Save updated jobs to local storage
    updateJobsInLocalStorage();
}

function saveJobsToLocalStorage(job) {
    jobMap.set(job.id, job.text);
    const jobMapArray = Array.from(jobMap.entries());
    localStorage.setItem("jobs", JSON.stringify(jobMapArray));
}

function updateJobsInLocalStorage() {
    const jobMapArray = Array.from(jobMap.entries());
    localStorage.setItem("jobs", JSON.stringify(jobMapArray));
}

function loadJobsFromLocalStorage() {
    let storedJobs = localStorage.getItem("jobs");
    if(!storedJobs) {
        return;
    }

    storedJobs = JSON.parse(storedJobs);
    storedJobs.forEach(([id, text]) => {
        const job = {
            id,
            text
        };
        jobMap.set(id, text);
        addJobToHTML(job);
    });
}

