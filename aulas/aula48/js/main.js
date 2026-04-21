import { getElement, addElement } from "./helpers.js";
import { addTask, deleteTask } from "./logic.js";

const form = getElement('#form-task');
const list = getElement('#list');

form.addEventListener('click', function(e) {
    const el = e.target;

    if (el.id === 'add-task') {
        e.preventDefault();
        const inputTask = getElement('#input-task');
        const taskName = inputTask.value;

        if (!taskName) {
            inputTask.focus();
            return;
        }
        
        addTask(list, taskName)

        inputTask.value = '';
        inputTask.focus();
    }
})

list.addEventListener('click', function(e) {
    const el = e.target;

    if (el.classList.contains('btn-error')) {
        deleteTask(el, 'li');
    }
})