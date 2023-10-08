/* Objetivo: Desenvolver um programa JavaScript que faça a leitura de dois numeros inteiros e apresente o resultado da soma entre eles */

// Definição das variaveis

let js_n1
let js_n2
let js_soma

// Entrada de dados

js_n1 = parseInt(window.prompt('Digite o primeiro numero', 'Digite aqui'))
js_n2 = parseInt(window.prompt('Digite o segundo numero', 'Digite aqui'))

// Processamento de dados 

js_soma = js_n1 + js_n2

// Saida de dados

document.write('O resultado é - ' + js_soma)