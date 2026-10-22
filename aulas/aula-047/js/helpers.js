export function setClass (element, className) {
    const set = document.querySelector(element);
    set.classList.add(className);
}

export function removeClass (element, className) {
    const set = document.querySelector(element);
    set.classList.remove(className);
}