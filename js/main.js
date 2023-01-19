
//variables
let nombrePersona
let conocimiento
let habilidad
let actitud
let valor 
let cantidadPersonas



//FUNCION
function calculo (conocimiento, habilidad, actitud, valor){
    valor = ((conocimiento + habilidad) * actitud) /2
    console.log(`El VALOR de ${nombrePersona} es ${valor}`)


    //ciclo IF dentro de funcion.
    if(valor < 69){
        console.log(`${nombrePersona} debe seguir creciendo`)
    } else if(valor >= 70 && valor <= 89){
        console.log(`${nombrePersona} es una persona con aptitudes`)
    } else if(valor >= 90 && valor <= 99){
        console.log(`${nombrePersona} es una persona con mucho valor`)
    } else if(valor == 100){
        console.log(`${nombrePersona} es una persona increiblemente valorada!`)
    } else if(valor > 100){
        console.log(`ERROR, usted ingreso algun valor mayores a 10. Vuelva a ingresar valores correctos`)
    } 
}




//pedir cantidad de personas a valorar
cantidadPersonas = parseInt(prompt(`Ingrese la cantidad de personas a valorar`))


//Codigo
for(let i = 1; i <=cantidadPersonas; i++ ){
    nombrePersona = prompt("Ingrese el NOMBRE de la persona a valorar")
    conocimiento = parseInt(prompt(`del 1 al 10, ingrese el CONOCIMIENTO de  ${nombrePersona}`))
    habilidad = parseInt(prompt(`del 1 al 10, ingrese la HABILIDAD de ${nombrePersona}`))
    actitud = parseInt(prompt(`del 1 al 10, ingrese la ACTITUD de ${nombrePersona}`))
    
    const persona = {
        nombre: nombrePersona,
        conocimientoper: conocimiento,
        habilidadper: habilidad,
        actitudper: actitud
    }

    calculo (conocimiento, habilidad, actitud, valor)
    
    console.log(persona)
}















//-------------------------------------------------PRACTICA CLASES-----------------------------------------------------------
// selecciono + control K y C = comento
// selecciono + control K y U = descomento


// function participante(nombre, edad, roll, ciudad){
//    //ATRIBUTOS
//     this.nombre = nombreI,
//     this.edad = edadI,
//     this.roll = rollI,
//     this.ciudad = coudadI
//     //METODO:
//     this.mostrarinfo = function(){
//         console.log(`la persona ${this.nombre} con el roll ${this.roll} vive en ${this.ciudad}`)
//     }
// }

// const participante1 = new participante("damian", 30, "jefe", "glew")


// //tercera forma crear objeto - mediante clase
// class auto{
//     constructor(modelo, marca, precio){
//         this.modelo = modelo,
//         this.marca = marca,
//         this.precico = precio
//     }

// }

// //instanciar el objeto de la class
// const fitito = new auto("600", "fiat", 50000)
// console.log(fitito)