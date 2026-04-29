import { toggleTheme } from './theme.js';

const btn = document.querySelector('#theme-toggle');
    
if (btn) {
    btn.addEventListener('click', toggleTheme);
}

const taskInput = document.querySelector('#task-input');
const taskButton = document.querySelector('#task-button');
const taskList = document.querySelector('#task-list');

function createLi() {
    const li = document.createElement('li');
    li.className = 'bg-gray-200 d-flex justify-content-between align-items-center p-4 rounded-md mb-2 overflow-hidden';
    return li;
}

function inputClear() {
    taskInput.value = '';
    taskInput.focus();
}

function createDeleteButton(li) {
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Remover';
    deleteButton.className = 'btn btn-sm flex-shrink-0 text-danger';
    li.appendChild(deleteButton);
}

function addTask(textInput) {
    const li = createLi();
    
    const span = document.createElement('span');
    span.innerText = textInput;
    span.className = 'text-break flex-fill';
    
    li.appendChild(span); 
    createDeleteButton(li); 
    
    taskList.appendChild(li);
    inputClear();
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
        let textTask = task.querySelector('span').innerText;
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