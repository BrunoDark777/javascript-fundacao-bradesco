/* Objetivo: Ler dois valores independentemente da ordem em que foram digitados, e apresenta-los em ordem crescente.
Será necessario efetuar uma troca de valores, por isso, preciso definir uma terceira variavel. */

// Definição das variaveis:

let js_n1
let js_n2
let js_n3

// Entrada de Dados:

js_n1 = parseInt(window.prompt('Informe o valor do primeiro número: ', '00'))
js_n2 = parseInt(window.prompt('Informw o valor do segundo número: ', '00'))

// Saida de Dados sem classificação:

document.write('Número 1 digitado = ' + js_n1)
document.write('<br>Número 2 digitado = ' + js_n2)

// Saida de Dados por decisão condicional simples (if):

if(js_n1 > js_n2) {
    js_n3 = js_n1
    js_n1 = js_n2
    js_n2 = js_n3
}

document.write('<p><b>Classificação em ordem crescente: </b></p> ' + js_n1 + ' e ' + js_n2)