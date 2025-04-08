// Load tasks from localStorage
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

// Hiển thị các công việc
function renderTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " completed" : "");

    const taskText = document.createElement("span");
    taskText.textContent = task.name;

    const actions = document.createElement("div");
    actions.className = "actions";

    const doneBtn = document.createElement("button");
    doneBtn.textContent = "✓";
    doneBtn.className = "done";
    doneBtn.onclick = () => toggleComplete(index);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";
    deleteBtn.onclick = () => deleteTask(index);

    actions.appendChild(doneBtn);
    actions.appendChild(deleteBtn);

    li.appendChild(taskText);
    li.appendChild(actions);
    taskList.appendChild(li);
  });

  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Thêm công việc mới
function addTask() {
  const input = document.getElementById("task-input");
  const taskName = input.value.trim();
  if (taskName === "") return alert("Vui lòng nhập công việc!");

  tasks.push({ name: taskName, completed: false });
  input.value = "";
  renderTasks();
}

// Xóa công việc
function deleteTask(index) {
  tasks.splice(index, 1);
  renderTasks();
}

// Đánh dấu hoàn thành
function toggleComplete(index) {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
}

// Tải công việc khi trang được tải
document.addEventListener("DOMContentLoaded", renderTasks);
