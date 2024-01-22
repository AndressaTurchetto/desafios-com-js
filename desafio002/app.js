//Desafio 1
function helloWorld() {
    alert("Hello world");
}
helloWorld();

//Desafio 2
function seuNome(nome) {
    console.log(`Olá, ${nome}!`);
};

seuNome("Anderson");

//Desafio 3
function dobrarNumero(numero) {
    return numero * 2;
}

let resultado = dobrarNumero(5);
console.log(resultado);

//Desafio 4
function CalcularMedia(num1, num2, num3){
    return (num1 + num2 + num3) / 3;
}

let resultadoMedia = CalcularMedia(1, 5, 4);
console.log(resultadoMedia);

//Desafio 5
function maiorNumero(val1, val2) {
    return val1 > val2 ? val1 : val2;
}

let resultadoNumero = maiorNumero(2, 9);
console.log(resultadoNumero);

//Desafio 6 
function multiplicarNum(valor) {
    return valor * valor;
};

let calculo = multiplicarNum(9)
console.log(calculo);