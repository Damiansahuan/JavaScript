
//definir variables
let nombrePersona
let conocimiento
let habilidad
let actitud
let valor
let cantidadPersonas


//pedir cantidad de personas a valorar
cantidadPersonas = parseInt(prompt(`Ingrese la cantidad de personas a valorar`))


//pedir nombre y valores sobre esa personas
//nombrePersona = prompt("Ingrese el NOMBRE de la persona a valorar")

//conocimiento = parseInt(prompt(`del 1 al 10, ingrese el CONOCIMIENTO de  ${nombrePersona}`))
//habilidad = parseInt(prompt(`del 1 al 10, ingrese la HABILIDAD de ${nombrePersona}`))
//valor = conocimiento + habilidad
//actitud = parseInt(prompt(`del 1 al 10, ingrese la ACITUD de ${nombrePersona}`))
//valor = (valor * actitud) / 2
//console.log(`El VALOR de ${nombrePersona} es ${valor}`)

//Codigo funcionando
for(let i = 1; i <=cantidadPersonas; i++ ){
    nombrePersona = prompt("Ingrese el NOMBRE de la persona a valorar")

    conocimiento = parseInt(prompt(`del 1 al 10, ingrese el CONOCIMIENTO de  ${nombrePersona}`))
    habilidad = parseInt(prompt(`del 1 al 10, ingrese la HABILIDAD de ${nombrePersona}`))
    valor = conocimiento + habilidad
    actitud = parseInt(prompt(`del 1 al 10, ingrese la ACITUD de ${nombrePersona}`))
    valor = (valor * actitud) / 2
    console.log(`El VALOR de ${nombrePersona} es ${valor}`)
}