const div = document.querySelector('#div-id');
const paragraphs = div.querySelectorAll('p');
const sectionCard = document.querySelector('.card-alt');
const sectionStyle = getComputedStyle(sectionCard);
const sectionBgColor = sectionStyle.backgroundColor;

console.log(sectionBgColor);

for (let p of paragraphs) {
    p.style.backgroundColor = sectionBgColor;
    p.style.color = 'white';
}