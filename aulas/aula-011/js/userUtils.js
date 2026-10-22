export function isName(name){
    name.trim();
    if (name === '' || !isNaN(name) || name === null){
        console.log(`[ERRO] O nome é numérico ou nulo.`);
        return false;
    } else {
        return true;
    }
}

export function toCapitalize(text){
    if (!text) return '';
    return text
    .trim()
    .toLowerCase()
    .split(' ')
    .map(splitText => splitText.charAt(0).toUpperCase() + splitText.slice(1))
    .join(' ');
}