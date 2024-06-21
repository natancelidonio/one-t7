// Perguntando dia da semana e mostrando mensagem conforme o dia
let diaDaSemana = prompt("Qual é o dia da semana? ");

if(diaDaSemana == "Sábado" || diaDaSemana == "Domingo") {
    alert("Bom fim de semana!");
} else {
    alert("Boa semana!");
};

// Verificando se um número é positivo ou negativo
let numeroDigitado = prompt("Digite um número: ");

if(numeroDigitado >= 0) {
    alert("O número digitado é positivo ou zero.");
}else {
    alert("O número digitado é negativo.");
};

// Sistema de pontuação de um jogo
let pontuacao = 0;
pontuacao = prompt("Informe a pontuação final (1 - 120): ");

if(pontuacao >= 100) {
    alert("Parabéns, você venceu!");
}else {
    alert("Tente novamente para ganhar.");
};

// Mensagem para informar saldo da conta, com template string
let saldo = 10;

alert(`O saldo da sua conta é R$${saldo},00`);

// Mensagem de boas-vindas
let nome = prompt("Informe seu nome: ");

alert(`Boas-vindas, ${nome}!`);