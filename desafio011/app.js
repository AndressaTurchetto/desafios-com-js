//Contagem progressiva até um número específico:

let numeroProgr = parseInt(prompt("Digite um número para começar a contagem progressiva:"));
let contadorProgr = 0;

if (!isNaN(numeroProgr) && numeroProgr >= 0) {
    while (contadorProgr <= numeroProgr) {
        console.log(contadorProgr);
        contadorProgr++;
    }
} else {
    console.log("Por favor, digite um número válido maior ou igual a zero.");
}
