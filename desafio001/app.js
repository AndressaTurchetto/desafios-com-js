let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora do desafio';

function consoleButton() {
    console.log ('O botão foi clicado');
}

function alertButton() {
    alert ('Eu amo JS');
}

function promptButton() {
    let resposta = prompt('Insira o nome de uma cidade do Brasil');
    alert(`Estive em ${resposta} e lembrei de você!`);
}

function somaButton() {
        let numero1 = parseInt(prompt('Digite um número: ') );
        let numero2 = parseInt(prompt('Digite outro número: ') );
        resultado = numero1+numero2;
        alert (`O resultado é: ${resultado}`);
}