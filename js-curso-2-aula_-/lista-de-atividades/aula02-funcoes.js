// 1.
function saudarMundo() {
    console.log('Olá, mundo!');
};

saudarMundo();

// ####################################
// 2.
function saudarPessoa(nome) {
    console.log(`Olá, ${nome}!`);
};

saudarPessoa('Natan');

// ####################################
// 3.
function dobrarNumero(numero) {
    return numero * 2;
}

dobrarNumero(2);

// ####################################
// 4.
function calcularMedia(numero1, numero2, numero3) {
    let media = (numero1 + numero2 + numero3) / 3;
    return media;
};

calcularMedia(5, 5, 5);

// ####################################
// 5.
function acharMaior(numero1, numero2) {
    let maior = numero1 > numero2 ? numero1 : numero2;
    return maior;
};

acharMaior(2, 4);

// ####################################
// 6.

function calcularQuadradoDoNumero(numero) {
    return numero * numero;
};

calcularQuadradoDoNumero(2);