//8- Crie uma variável "numero" e peça um valor com prompt verifique se é positivo, negativo ou zero. Use if-else para imprimir a respectiva mensagem.

let numero = prompt('Favor informe um número.');

if (numero == 0){
    alert('O número digitado é zero.');
} else if (numero > 0){
    alert('O número digitado é positivo.');
} else {
    alert('O número digitado é negativo.');
}
