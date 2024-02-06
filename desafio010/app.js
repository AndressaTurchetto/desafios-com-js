//Contagem regressiva a partir de um número específico:

let numeroRegres = parseInt(prompt("Digite um número para começar a contagem regressiva:"));

if (!isNaN(numeroRegres) && numeroRegres >= 0) {
    while (numeroRegres >= 0) {
        console.log(numeroRegres);
        numeroRegres--;
    }
} else {
    console.log("Por favor, digite um número válido maior ou igual a zero.");
}
