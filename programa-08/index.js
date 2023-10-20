/* Objetivo: Utilizando o recurso de seleção multipla - switch...case, pesquisar o nome do mês de referencia através do número do respectivo mês informado.
- Objetivos/Métodos utilizados:
Entrada: document.form (Entrada de Dados via formulario) 
Saida: document.form (Saida de Dados via formulario)
-  Importante:
Os campos do formulario serão identificados com o prefixo f_ => Exemplo - f_mes
Os campos do JavaScript serão identificados com o prefixo js_ => Exemplo - js_mes */

// Definição de variaveis:

let = js_mes

// Inicio da função verificames() para capturar Dados do formulario e pesquisar por Seleção multipla:

function verificames(){

    // Captura de valor do mês do formulario f_mes e transferencia/atribuição para a variavel do JavaScript js_mes:

    js_mes = parseInt(document.formcalend.f_mes.value)

    // Inicio da estrutura de repetição Switch...case:

    switch(js_mes){
        case 1 : document.formcalend.f_nomemes.value = 'Janeiro'; break
        case 2 : document.formcalend.f_nomemes.value = 'Fevereiro'; break
        case 3 : document.formcalend.f_nomemes.value = 'Março'; break
        case 4 : document.formcalend.f_nomemes.value = 'Abril'; break
        case 5 : document.formcalend.f_nomemes.value = 'Maio'; break
        case 6 : document.formcalend.f_nomemes.value = 'Junho'; break
        case 7 : document.formcalend.f_nomemes.value = 'Julho'; break
        case 8 : document.formcalend.f_nomemes.value = 'Agosto'; break
        case 9 : document.formcalend.f_nomemes.value = 'Setembro'; break
        case 10 : document.formcalend.f_nomemes.value = 'Outubro'; break
        case 11 : document.formcalend.f_nomemes.value = 'Novembro'; break
        case 12 : document.formcalend.f_nomemes.value = 'Dezembro'; break
    default : document.formcalend.f_nomemes.value = 'Mês Invalido!'; break
    }
}