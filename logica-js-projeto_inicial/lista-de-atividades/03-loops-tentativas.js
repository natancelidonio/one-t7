const prompt = require("prompt-sync")();

// 1.
let contador = 1;

while (contador <= 10) {
    console.log(`O contador está em: ${contador}.`);
    contador++;
};

console.log("######################################");
// 2.
let contador2 = 10;

while (contador2 >= 0) {
    console.log(`O contador está em: ${contador2}.`);
    contador2--;
};

console.log("######################################");
// 3.
let contador3 = prompt("Informe um número: ");

while (contador3 >= 0) {
    console.log(`Contagem regressiva: ${contador3}!`);
    contador3--;
};

console.log("######################################");
// 4.
let numero = prompt("Informe um número: ");
let contador4 = 0;

while (contador4 <= numero) {
    console.log(`Contagem progressiva: ${contador4}`);
    contador4++;
};
