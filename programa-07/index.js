/* Objetivo: Calcular o salario liquido de um funcionario que trabalha por hora (horista).
Para desenvolver o calculo é necessario as seguintes informações:
    - Quantidade de horas trabalhadas por mês (js_qht)
    - Valor de hora de trabalho (js_vht)
    - Persentual de desconto do INSS (js_inss) 
- Inoforme a classificação salarial
- Objeto / Metodo utilizado:
- Entrada : window.prompt
- Saida : window.write */


// Definição de variaveis:

let js_qht   // var de entrada : Quantidade de horas trabalhadas
let js_vht  // var de entrada : Valor de horas trabalhadas
let js_inss // var de entrada : Persentual de desconto do INSS
let js_tdes // var de saida : Total de descontos
let js_sb // var de saida : Valor de salario bruto
let js_sl // var de saida : Valor de salario liquido

// Entrada de Dados:

js_qht = parseFloat(window.prompt('Informe a quatidade de horas trabalhadas/mês: (135 a 180)', '00'))
js_vht = parseFloat(window.prompt('Informe o valor da hora trabalhada: (25 a 50)', '00'))
js_inss = parseFloat(window.prompt('Informe o persentual de desconto INSS: (5 a 15)', '00'))

// Processamento de Dados:

js_sb = js_vht * js_qht
js_tdes = (js_inss/100) * js_sb
js_sl = js_sb - js_tdes

// Saida de Dados com consistencia de valores:

document.write('<p><b>DEMOSTRATIVO PARA CALCULO DE SALARIO LIQUIDO</b></p>')

document.write('<p>Quantidade de horas trabalhadas (135 a 180) =></p><b> ' + js_qht + '</b>')
if(js_qht > 180){
    document.write('...<b>Valor Maximo excedido!</b>')
}
if(js_qht < 135){
    document.write('...<b>Valor Minimo invalido!</b>')
}
document.write('<p>Valor por hora trabalhada (25 a 50) =></p><b> ' + js_vht + '</b>')
if(js_vht > 50){
    document.write('...<b>Valor Maximo excedido!</b>')
}
if(js_vht < 25){
    document.write('...<b>Valor Minimo invalido!</b>')
}
document.write('<p>Persentual de desconto INSS (5 a 15) =></p><b> ' + js_inss + '</b>')
if(js_inss > 15){
    document.write('...<b>Valor Maximo excedido!</b>')
}
if(js_inss < 5){
    document.write('...<b>Valor Minimo invalido!</b>')
}
document.write('<p>==================================================================</p>')
document.write('<p><b>Salário BRUTO =</b></p> ' + js_sb)
document.write('<p>Desconto do INSS =</p> ' + js_inss)
document.write('<p><b>Salário LíQUIDO =</b></p> ' + js_sl + '<br>')

// Saída de Dados com Aninhamento de if:

if(js_sl > 10500){
    document.write('<br><b>Salário Elevado</b> maior que 10.500')
}
else{
    if(js_sl > 6000){
        document.write('<br><b>Salário Satisfatório</b> maior que 6000')
    }
else{
    if(js_sl > 3000){
        document.write('<br><b>Salário Moderado</b> maior que 3000')
    }
 else{
    document.write('<br><b>Salário Insatisfatório</b> menor ou igual a 3000')
} 
   }
}