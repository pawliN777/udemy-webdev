import { addElement, getElement } from "./helpers.js";

export function addTask(el, taskName) {
    const msg = `
        <li>
            <span>${taskName}</span>
            <button class="btn btn-error p-sm fs-sm rad-1">Remover</button>
        </li>
    `;

    return addElement(el, msg);
}

export function deleteTask(el, tag) {
    return el.closest(tag).remove();
}