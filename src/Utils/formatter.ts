//utilizando o proprio internacionalizador nativo do react, para fazer a conversão dos valores das transições para moeda BRL

export const dateFormatter = new Intl.DateTimeFormat('pt-BR')

export const priceFormatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',

});


