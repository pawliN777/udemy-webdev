const products = [
    'Mouse',
    'Teclado',
    'Monitor',
    'Processador',
    'Gabinete',
    'Placa de vídeo'
];

console.log(`\nTotal: ${products.length} produtos\n`);

for (let i = 0; i < products.length; i++) {
    console.log(`${i + 1}. ${products[i]}`);
}
