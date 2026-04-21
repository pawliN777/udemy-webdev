export function getSecond (s) {
    const date = new Date(s * 1000);
    return date.toLocaleTimeString('pt-br', {
        hour12: false,
        timeZone: 'UTC'
    });
}