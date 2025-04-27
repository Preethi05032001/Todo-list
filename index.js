function addTask() {
    let taskInput = document.getElementById("taskInput");
    let taskText = taskInput.value.trim();
    if (taskText === "") return;

    let li = document.createElement("li");
    li.innerHTML = `<input type="checkbox" class="checkinput" onclick="toggleComplete(this)"> 
                    <span>${taskText}</span> 
                    <button class="edit-btn" onclick="editTask(this)">✏️</button>
                    <button onclick="removeTask(this)">X</button>`;
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
    saveTasks();
}

function removeTask(button) {
    button.parentElement.remove();
    saveTasks();
}

function toggleComplete(checkbox) {
    checkbox.nextElementSibling.classList.toggle("completed");
    saveTasks();
}

function editTask(button) {
    let taskInput = document.getElementById("taskInput");
    let taskSpan = button.previousElementSibling;
    taskInput.value = taskSpan.textContent;
    taskInput.focus();
    removeTask(button);
}

function saveTasks() {
    let tasks = [];
    document.querySelectorAll("#taskList li").forEach(li => {
        let taskText = li.querySelector("span").textContent;
        let completed = li.querySelector("input[type='checkbox']").checked;
        tasks.push({ text: taskText, completed: completed });
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
    let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
    tasks.forEach(task => {
        let li = document.createElement("li");
        li.innerHTML = `<input type="checkbox" class="checkinput" onclick="toggleComplete(this)" ${task.completed ? "checked" : ""}> 
                        <span class="${task.completed ? "completed" : ""}">${task.text}</span> 
                        <button class="edit-btn" onclick="editTask(this)">✏️</button>
                        <button onclick="removeTask(this)">X</button>`;
        document.getElementById("taskList").appendChild(li);
    });
}

// Load tasks when the page loads
document.addEventListener("DOMContentLoaded", loadTasks);