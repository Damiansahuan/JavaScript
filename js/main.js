
//variables
let nombrePersona
let conocimiento
let habilidad
let actitud
let valor
let cantidadPersonas


//pedir cantidad de personas a valorar
cantidadPersonas = parseInt(prompt(`Ingrese la cantidad de personas a valorar`))


//Codigo
for(let i = 1; i <=cantidadPersonas; i++ ){
    nombrePersona = prompt("Ingrese el NOMBRE de la persona a valorar")

    conocimiento = parseInt(prompt(`del 1 al 10, ingrese el CONOCIMIENTO de  ${nombrePersona}`))
    habilidad = parseInt(prompt(`del 1 al 10, ingrese la HABILIDAD de ${nombrePersona}`))
    valor = conocimiento + habilidad
    actitud = parseInt(prompt(`del 1 al 10, ingrese la ACTITUD de ${nombrePersona}`))
    valor = (valor * actitud) / 2
    console.log(`El VALOR de ${nombrePersona} es ${valor}`)

    //ciclo IF dentro del FOR.
    if(valor < 69){
        console.log(`${nombrePersona} debe seguir creciendo`)
    } else if(valor >= 70 && valor <= 89){
        console.log(`${nombrePersona} es una persona con aptitudes`)
    } else if(valor >= 90 && valor <= 99){
        console.log(`${nombrePersona} es una persona con mucho valor`)
    } else if(valor == 100){
        console.log(`${nombrePersona} es una persona increiblemente valorada!`)
    }

}


