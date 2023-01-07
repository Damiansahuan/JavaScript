
//definir variables
let nombrePersona
let conocimiento
let habilidad
let actitud
let valor


//pedir el nombre de la primera persona a valorar
nombrePersona = perseInt(prompt("Ingrese el nombre de la persona a valorar"))



//pedir valores sobre esa personas

conocimiento = parseInt(prompt("del 1 al 10, ingrese el conocimiento de + nombrePersona"))
habilidad = parseInt(prompt("del 1 al 10, ingrese la habilidad de + nombrePersona"))
valor = conocimiento + habilidad
actitud = parseInt(prompt("del 1 al 10, ingrese el conocimiento de + nombrePersona"))
valor = valor * actitud
console.log(El VALOR de + nombrePersona es + valor)