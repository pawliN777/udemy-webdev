const elements = [
    {tag: 'p', text: 'Paragraph'},
    {tag: 'div', text: 'Divisor'},
    {tag: 'section', text: 'Section'},
    {tag: 'footer', text: 'Footer'}
];

const section = document.querySelector('#section-id');
const div = document.createElement('div');

section.appendChild(div);

for (let i = 0; i < elements.length; i++) {
    let { tag, text } = elements[i];

    let createTag = document.createElement(tag);
    let createText = document.createTextNode(text);

    div.appendChild(createTag);
    createTag.appendChild(createText);
}