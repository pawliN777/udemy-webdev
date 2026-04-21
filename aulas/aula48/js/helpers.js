export function getElement(el) {
    return document.querySelector(el);
}

export function addElement(el, msg) {
    return el.innerHTML += msg;
}