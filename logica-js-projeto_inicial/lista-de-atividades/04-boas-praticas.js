// 1.
console.log("Boas-vindas!");

// 2.
let nome = "Natan";
console.log(`Boas-vindas, ${nome}!`);

// 3.
let nome2 = "Natan";
alert(`Olá, ${nome2}!`);

// 4.
let linguagemPreferida = prompt("Qual a linguagem de programação que você mais gosta? ");

// 5.
let valor1 = 1;
let valor2 = 2;
let resultado = valor1 + valor2;

console.log(`A soma de ${valor1} e ${valor2} é igual a ${resultado}.`);

// 6.
let valor3 = 1;
let valor4 = 2;
let resultado2 = valor4 - valor3;

console.log(`A diferença de ${valor4} e ${valor3} é igual a ${resultado2}.`);

// 7.
let idade = prompt("Informe sua idade: ");

if (idade >= 18) {
    console.log("Você é maior de idade");
} else {
    console.log("Você é menor de idade");
};

// 8.
let numero = prompt("Informe um valor: ");

if (numero >= 0) {
    console.log("O número informado é positivo ou igual a zero");
} else {
    console.log("O número informado é negativo");
};

// 9.
let contador = 0;

while (contador < 11) {
    console.log(contador);
    contador++;
};

// 10.
let nota = 6;

if (nota >= 7) {
    console.log("Aprovado");
} else {
    console.log("Reprovado");
};

// 11.
let numeroAleatorio = Math.random();

console.log(numeroAleatorio);

// 12.
let numeroAleatorio2 = Math.random() * 10;

console.log(numeroAleatorio2);

// 13.
let numeroAleatorio3 = Math.random() * 1000;

console.log(numeroAleatorio3);
