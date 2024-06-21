//############################################
// 1.
function calcularIMC(altura, peso) {
    return (peso / altura) / altura;
};

//############################################
// 2.
function calcularFatorial(numero) {
    let resultado = numero;
    let primeiroMultiplicador = numero - 1;
    for (let i = primeiroMultiplicador; i > 1; i--) {
        resultado *= i 
    }
    return console.log(resultado);
};


//############################################
// 3.
function converterDolarParaReal(numeroDolar) {
    let cotacaoDolar = 4.80;
    return numeroDolar * cotacaoDolar;
};

//############################################
// 4.
function mostrarAreaEPerimetro(comprimento, largura) {
    let area = comprimento * largura;
    let perimetro = 2 * (comprimento + largura);
    return console.log(`A área da sala é: ${area}. O perímetro da sala é: ${perimetro}.`);
};

//############################################
// 5.

function mostrarTabuada(numero) {
    for(let i = 1; i < 11; i++) {
        let resultado = numero * i;
        console.log(`${numero} x ${i} = ${resultado}.`);
    };
};
