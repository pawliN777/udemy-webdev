export function setElement(element, msg) {
    const set = document.querySelector(element);
    set.innerHTML = msg;
}

export function removeClass(element, className) {
    const set = document.querySelector(element);
    set.classList.remove(className);
}

export function getNumber(element) {
    const number = Number(document.querySelector(element).value);
    return number;
}

export function setClass(element, className) {
    const set = document.querySelector(element);
    set.classList.add(className);
}
