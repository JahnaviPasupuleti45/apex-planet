const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

function saveTasks() {
  localStorage.setItem('tasks', taskList.innerHTML);
}

function loadTasks() {
  taskList.innerHTML = localStorage.getItem('tasks') || '';
}

function addTask() {
  if (taskInput.value === '') return;

  const li = document.createElement('li');
  li.textContent = taskInput.value;

  const del = document.createElement('button');
  del.textContent = '❌';
  del.onclick = () => {
    li.remove();
    saveTasks();
  };

  li.appendChild(del);
  taskList.appendChild(li);
  taskInput.value = '';
  saveTasks();
}

window.onload = loadTasks;