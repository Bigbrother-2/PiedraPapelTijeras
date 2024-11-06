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

