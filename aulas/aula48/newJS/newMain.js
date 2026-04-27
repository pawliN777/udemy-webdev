const taskInput = document.querySelector('#task-input');
const taskButton = document.querySelector('#task-button');
const taskList = document.querySelector('#task-list');

function createLi() {
    const li = document.createElement('li');
    li.className = 'card-outline d-flex justify-content-between align-items-center p-2 rounded-md mb-2';
    return li;
}

function inputClear() {
    taskInput.value = '';
    taskInput.focus();
}

function createDeleteButton(li) {
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Remover';
  deleteButton.className = 'btn btn-danger btn-sm ml-2';
  li.appendChild(deleteButton);
}
function addTask(textInput) {
    const li = createLi();
    li.innerText = textInput;
    taskList.appendChild(li);
    inputClear();
    createDeleteButton(li);
    saveTask();
}

taskInput.addEventListener('keypress', function(e) {
    
    if (e.keyCode === 13) {
        if (!taskInput.value) return;
        
        addTask(taskInput.value);
    }

});

taskButton.addEventListener('click', function() {
    
    if (!taskInput.value) return; 
    
    addTask(taskInput.value);
});

document.addEventListener('click', function(e) {
    const el = e.target;
    
    if (el.textContent === 'Remover') {
        el.parentElement.remove();
        saveTask();
    }
    
});

function saveTask() {
    const tasks = taskList.querySelectorAll('li');
    const list = [];

    for (let task of tasks) {
        let textTask = task.innerText;
        textTask = textTask.replace('Remover', '').trim();
        list.push(textTask);
    }

    const taskJson = JSON.stringify(list);
    localStorage.setItem('savedTasks', taskJson);
}

function addSavedTasks() {
    const tasks = localStorage.getItem('savedTasks');
    const list = JSON.parse(tasks);

    for (let task of list) {
        addTask(task);
    }
}

addSavedTasks();