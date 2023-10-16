/* Objetivo: Ler dois valores independentemente da ordem em que foram digitados, e aprsenta-los em ordem crescente.
Com a utilização da condição condicional composta (if...else), não tenho mais a necessidade de definir uma terceira variável. */

// Definição de Variáveis:

let js_n1
let js_n2

// Entrada de Dados:

js_n1 = parseInt(window.prompt('Informe o valor do primeiro número: ', '00'))
js_n2 = parseInt(window.prompt('Informe o valor do segundo número: ', '00'))

// Saida de Dados sem classificação:

document.write('Número 1 digitado = ' + js_n1)
document.write('<br>Número 2 digitado = ' + js_n2)

// Saida de Dados com classificação por condição condicional composta (if...else):

if(js_n1 < js_n2) {
    document.write('<p><b>Classificação em ordem crescente:<b/></p> ' + js_n1 + ' e ' + js_n2)
}
else{
    document.write('<p><b>Classificação em ordem crescente:<b/></p> ' + js_n2 + ' e ' + js_n1)
}