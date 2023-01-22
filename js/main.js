
//variables
let nombreJugador 
let ataque 
let defensa 
let actitud
let valor 
let cantidadJugador 



//class constructora
class jugador {
    constructor(id, nombre, ataquejugador, defensajugador, actitudjugador, valorjugador)
    {
    //propiedades/atributos
    this.id = id,
    this.nombre = nombre,
    this.ataquejugador = ataquejugador,
    this.defensajugador = defensajugador,
    this.actitudjugador = actitudjugador,
    this.valorjugador = valorjugador 
    }
        
    //métodos
    mostrarInfojugador(){
    console.log(`Nombre ${this.nombre} - ATAQUE ${this.ataquejugador} - DEFENSA ${this.defensajugador} - ACTITUD ${this.actitudjugador}`)
    }
   
}



//Instanciación de objetos
const jugador1 = new jugador(1,"Z",10, 10, 10, 10)
const jugador2 = new jugador(2,"Y",10, 10, 10, 10)
const jugador3 = new jugador(3,"X",10, 10, 10, 10)



//guardar array players 
const players = [jugador1, jugador2, jugador3]
console.log(players)



//gardar array equipos
const equipos = []
console.log(equipos)
equipos.push(jugador1, jugador2, jugador3)
console.log(equipos)



//ciclo for of
// for(const elem of players){
//     console.log(elem)
//     console.log(elem.id, elem.nombre)
// }



//FUNCTIONS agregar jugadores:
function agregarjugador(){
    nombreJugador = prompt("Ingrese el NOMBRE del Jugador a valorar")
    ataque = parseInt(prompt(`del 1 al 10, ingrese el ATAQUE de  ${nombreJugador}`))
    defensa = parseInt(prompt(`del 1 al 10, ingrese la DEFENSA de ${nombreJugador}`))
    actitud = parseInt(prompt(`del 1 al 10, ingrese la ACTITUD de ${nombreJugador}`))

    calculo (ataque, defensa, actitud, valor)
  
    //nuevo objeto 
    const jugadorNuevo = new jugador(players.length+1, nombreJugador, ataque, defensa, actitud, valor)
    console.log(jugadorNuevo)
    
    //sumarlo a players
    players.push(jugadorNuevo) 
    jugadorNuevo.mostrarInfojugador()
    console.log(players)
}





// -->>>  No me carga ni me muestra VALOR, que es el numero que se calcula con la formula, dentro del objeto.
// //FUNCION para el calculo      
function calculo (ataque, defensa, actitud, valor){
    valor = ((ataque + defensa) * actitud) /2

    console.log(`✮ El VALOR de ${nombreJugador} es ${valor} ✮`)

    //ciclo IF dentro de metodo.
    if(valor < 69){
        console.log(`➤ ${nombreJugador} debe seguir creciendo`)
    } else if(valor >= 70 && valor <= 89){
        console.log(`➤ ${nombreJugador} es un Jugador con aptitudes`)
    } else if(valor >= 90 && valor <= 99){
        console.log(`➤ ${nombreJugador} es un Jugador con mucho valor`)
    } else if(valor == 100){
        console.log(`➤ ${nombreJugador} es un Jugador increiblemente valorada!`)
    } else if(valor > 100){
        console.log(`✘ERROR✘, usted ingreso algun valor mayores a 10. Vuelva a ingresar valores correctos`)
    } 
}



function menu(){
    let salirMenu = false
    do{
        salirMenu = preguntarOpcion(salirMenu)
    }while(!salirMenu)
} 



function preguntarOpcion(salir){
    let opcionIngresada = parseInt(prompt(`Ingrese la opción deseada
           1 - Agregar jugador
           2 - Borrar jugador
           3 - Consultar         
           0 - Salir del menu`))
    
        switch(opcionIngresada){
            case 1:
                agregarjugador()
            break
            case 2:
                console.log("Borrar libro")
            break
            case 3:
                console.log("Ver catalogo")
            break
            case 0:
                console.log("Te esperamos pronto")
                salir = true
                return salir
            break
            default:
                console.log("Ingrese una opción correcta")
            break
        }
}


menu()















//-------------------------------------------------PRACTICA CLASES-----------------------------------------------------------
// selecciono + control K y C = comento
// selecciono + control K y U = descomento