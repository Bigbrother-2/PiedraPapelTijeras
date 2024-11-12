/*Esta seccion es de menu de navegacion */

//seccion de menu desplegable

let menuDesplegable = document.getElementById("menuRedes")
let menuInterior = document.querySelector(".redesOcultas")


menuDesplegable.addEventListener("click",()=>{
    event.preventDefault(); //Como esta entre <a></a> cada que se hace un click se recarga la pagina. Este evita que la recargue 
    let displayActual = window.getComputedStyle(menuInterior).display

    if(displayActual === "none"){
        menuInterior.style.display = "flex"
    } else if(displayActual === "flex"){
        menuInterior.style.display = "none"
    }
})

// Seccion de ventana de instrucciones. 

let ventanaDesplegable = document.getElementById("menuInstrucciones") //Este es para escuchar el evento 

let menuInstrucciones = document.querySelector(".instrucciones")

let xInstrucciones = document.getElementById("cierre")

ventanaDesplegable.addEventListener("click",()=>{
    event.preventDefault();
    let displayActual = window.getComputedStyle(menuInstrucciones).display;
    if(displayActual==="none"){
        menuInstrucciones.style.display = "flex" 
    }
})

xInstrucciones.addEventListener("click",()=>{
    menuInstrucciones.style.display = "none"
})



// Esta seccion es para cambiar el tema. Osea de oscuro a claro y viceversa. 

// Esta seccion es de movimiento de la palma de la mano

let palmaMano = document.querySelectorAll(".imagenMovimientoGrande")

let disparadorMovimiento = document.querySelectorAll(".imagenMovimiento")

let limiteSuperior = -50
let limiteInferior = 50
let direccion = 1
let posicion = 0
let intervalo
let tiempo = 0
disparadorMovimiento.forEach((imagen)=>{
    imagen.addEventListener("click", iniciarMovimiento)
})

function iniciarMovimiento (){
    // Si ya hay un intervalo corriendo, limpiarlo para evitar superposiciones
    clearInterval(intervalo);

    // Iniciar el intervalo
    intervalo = setInterval(movimiento, 6); // Cada 20 ms se ejecuta la función `movimiento`

    // Detener el movimiento después de 3 segundos
    setTimeout(() => {
        clearInterval(intervalo);
    }, 1500); // 3000 ms = 3 segundos

    
}

function movimiento(){
        posicion += 2 * direccion // Esto cambia posicion en 2 pixeles
        palmaMano.forEach((imagen)=>{
            imagen.style.transform = `translateY(${posicion}px)`;
            
        }) 
        if(posicion >=limiteInferior || posicion <= limiteSuperior){
            direccion *= -1
        }
    
}


/* Esta parte decide la logica del juego */

let eleccionJugador; //papel = 1 piedra = 2 tijera = 3
let numeroRandomPC;


//parte de contador de cuantas veces gano cada uno



disparadorMovimiento.forEach((eleccion)=>{
    eleccion.addEventListener("click", eleccionDelJugador)
})

function eleccionDelJugador(){
    eleccionJugador = parseInt(event.target.getAttribute("data-value")) //Esto es para convertir el numero que con el getAttribute lo coloca como un string. Por eso tiene el parseInt para convertirlo en tipo number.
    
    eleccionPc()
}

function eleccionPc(){
    numeroRandomPC = Math.floor(Math.random()*4)
    comparacion()
}

function comparacion(){
    if(eleccionJugador === 1 && numeroRandomPC === 2){
        console.log("ganaste jugador")
        console.log(eleccionJugador)
        console.log(numeroRandomPC)
    } else if(eleccionJugador === 2 && numeroRandomPC === 3){
        console.log("ganaste jugador")
        console.log(eleccionJugador)
        console.log(numeroRandomPC)
    } else if(eleccionJugador === 3 && numeroRandomPC === 1){
        console.log("ganaste Jugador")
        console.log(eleccionJugador)
        console.log(numeroRandomPC)
    } else if (eleccionJugador == numeroRandomPC){
        console.log("Empataste")
        console.log(eleccionJugador)
        console.log(numeroRandomPC)
    } else {
        console.log("Perdiste")
        console.log(eleccionJugador)
        console.log(numeroRandomPC)
}

}
