/*Esta seccion es de menu de navegacion */

//seccion de menu desplegable

let menuDesplegable = document.getElementById("menuRedes")
let menuInterior = document.querySelectorAll(".redesOcultas")


menuDesplegable.addEventListener("click",(event)=>{
    // event.preventDefault(); //Como esta entre <a></a> cada que se hace un click se recarga la pagina. Este evita que la recargue 
    menuInterior.forEach((menu)=>{
        let displayActual = window.getComputedStyle(menu).display
        if(displayActual === "none"){
            menu.style.display = "flex"
        } else if(displayActual === "flex"){
            menu.style.display = "none"
        }
    })
    
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
let palmaManoDerecha = document.querySelectorAll    (".alReves")


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
    intervalo = setInterval(movimiento, 6); // Cada 6 ms se ejecuta la función `movimiento`

    // Detener el movimiento después de 1.5 segundos
    setTimeout(() => {
        clearInterval(intervalo);
        cambiodeImagenes()
        comparacion()
         //Luego de que termine el intervalo ejecuta cambioDeImagenes
    }, 1500); // 1500 ms = 3 segundos


    //resetea la imagen a puño cerrado cada vez que se escucha el click
    palmaMano.forEach((imagen)=>{
        imagen.src = `./assets/piedra.svg`;
        
    })
    palmaManoDerecha.forEach((imagen)=>{
        imagen.src = './assets/piedra.svg'
    })
    resultado.innerText = ""
}

function movimiento(){
        posicion += 2 * direccion // Esto cambia posicion en 2 pixeles
        // palmaMano.forEach((imagen)=>{
        //     imagen.style.transform = `translateY(${posicion}px)`;
        // })
        palmaMano.forEach((imagen, index) => {
            // Si es la palma derecha (digamos el segundo elemento del array), aplicar `scaleX(-1)`
            if (index === 1) {
                imagen.style.transform = `translateY(${posicion}px) scaleX(-1)`;
            } else {
                imagen.style.transform = `translateY(${posicion}px)`;
            }
        });
        if(posicion >=limiteInferior || posicion <= limiteSuperior){
            direccion *= -1
        }
    
}


//Funcion que cambia las imagenes. 

function cambiodeImagenes (){

    
    if(eleccionJugador === 1){
        palmaMano.forEach((imagen)=>{
            imagen.src = './assets/papel.svg'
        })
    } else if(eleccionJugador === 2){
        palmaMano.forEach((imagen)=>{
            imagen.src = './assets/piedra.svg'
        })
    }else if(eleccionJugador === 3){
        palmaMano.forEach((imagen)=>{
            imagen.src = './assets/tijera.svg'
        })
    }
    if(numeroRandomPC === 1){
        palmaManoDerecha.forEach((imagen)=>{
            imagen.src = './assets/papel.svg'
        })
    } else if(numeroRandomPC === 2){
        palmaManoDerecha.forEach((imagen)=>{
            imagen.src = './assets/piedra.svg'
        })
    }else if(numeroRandomPC === 3){
        palmaManoDerecha.forEach((imagen)=>{
            imagen.src = './assets/tijera.svg'
        })
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
    numeroRandomPC = Math.floor(Math.random()*3)+1
    //comparacion()
}


/*Aca no solo compara, si no que comparte cosas con la parte del puntaje. como suma de las varialbles de puntaje.  */



let contadorJugador =  document.getElementById("contadorJugador")
let contadorPC =  document.getElementById("contadorPc")
let resultado = document.getElementById("resultado")
let resultadoFinal = document.getElementById("resultadoPartida")

let conteoPlayer = 0
let conteoPC = 0





function comparacion(){
    if(eleccionJugador === 1 && numeroRandomPC === 2){
        conteoPlayer++
        contadorJugador.innerText = conteoPlayer
        resultado.innerText = "Ganaste"
        compararResultado()

    } else if(eleccionJugador === 2 && numeroRandomPC === 3){
        conteoPlayer++
        contadorJugador.innerText = conteoPlayer
        resultado.innerText = "Ganaste"
        compararResultado()

    } else if(eleccionJugador === 3 && numeroRandomPC === 1){
        conteoPlayer++
        contadorJugador.innerText = conteoPlayer
        resultado.innerText = "Ganaste"
        compararResultado()

    } else if (eleccionJugador == numeroRandomPC){
        resultado.innerText = "Empate"
        compararResultado()

    } else {
        conteoPC++
        contadorPC.innerText = conteoPC
        resultado.innerText = "Perdiste"
        compararResultado()

    }

}


// Esta parte es parte del puntaje. Las funciones estan aca, pero tengo cosas en funcion de comparacion y demas. 

let cuadroEmergente = document.getElementById("cuadroEmergente")
let cierreCuadro = document.getElementById("cierreCuadro")


function compararResultado(){
    if(conteoPlayer === 3){

        resultadoFinal.innerText = "Ganaste!"
        cuadroEmergente.style.display = "flex"
        //location.reload();
    } else if(conteoPC === 3){
        resultadoFinal.innerText = "Perdiste!"
        cuadroEmergente.style.display = "flex"
        //location.reload();
    }
}

cierreCuadro.addEventListener("click",()=>{
    cuadroEmergente.style.display = "none"
    location.reload()
})