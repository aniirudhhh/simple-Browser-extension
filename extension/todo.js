document.addEventListener("DOMContentLoaded", () => {
  const addBtn = document.getElementById("btn");
  addBtn.addEventListener("click", addTask);
});

function addTask() {
  const inputBox = document.getElementById("input-box");
  const taskBox = document.getElementById("task-box");
  const taskText = inputBox.value.trim();

  if (taskText === "") {
    alert("Please enter a task.");
    return;
  }
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  tasks.push(taskText);

  localStorage.setItem("tasks", JSON.stringify(tasks));
  displayTask(taskText);

  inputBox.value = "";
}

function displayTask(taskText) {
  const taskBox = document.getElementById("task-box");
  const taskItem = document.createElement("div");
  taskItem.className = "task-item";

  const uniqueId = "task-" + Date.now();

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.id = uniqueId;
  checkbox.name = "task";

  const label = document.createElement("label");
  label.setAttribute("for", uniqueId);
  label.innerText = taskText;

  checkbox.addEventListener("change", function () {
    label.classList.toggle("completed", checkbox.checked);
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "X";
  deleteBtn.className = "delete-btn";

  deleteBtn.addEventListener("click", function () {
    taskBox.removeChild(taskItem);
    deleteTaskFromStorage(taskText);
  });

  taskItem.appendChild(checkbox);
  taskItem.appendChild(label);
  taskItem.appendChild(deleteBtn);
  taskBox.appendChild(taskItem);
}

function deleteTaskFromStorage(taskText) {
  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks = tasks.filter((task) => task !== taskText);
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  tasks.forEach((taskText) => displayTask(taskText));
}

loadTasks();


