//Declaración de variables 
let template  = document.querySelector("template");
let contenedorTodasCartas = document.querySelector("#contenedorTodasCartas")
let main = document.querySelector("main")
let boton = document.querySelector("button")

//Array de emoticonos de cartas
const emoticonos = ["😀", "😃", "😄", "😁", "😆", "😅", "😂", "🤣", "😊", "😇", "🙂", "🙃", "😉", "😌", "😍", "😘", "😗", "😙", "😚", "😋", "😛", "😝", "😜", "🤪", "🤨", "🧐", "🤓", "😎", "🤩", "🥳", "😏", "😒", "😞", "😔", "😟", "😕", "🙁", "☹️", "😣", "😖", "😫", "😩", "😢", "😭", "😤", "😠", "😡", "🤬", "🤯", "😳", "😵", "😲", "🥺", "😨", "😰", "😥", "😓", "🤗", "🤔", "🤭", "🤫", "🤥", "😶", "😐", "😑", "😬", "🙄", "😯", "😦", "😧", "😮", "😧", "🥱", "😴", "😪", "😵", "🤐", "🥴", "🤢", "🤮", "🤧", "😷", "🤒", "🤕", "🦷", "🙈", "🙉", "🙊", "💀", "🔥", "💥", "💣", "💩", "👻", "👽", "👾", "🤖", "🎃", "😺", "😸", "😹", "😻", "😼", "😽", "🙀", "😿", "😾", "🦁", "🐵", "🐶", "🐺", "🦊", "🐱", "🐯", "🦁", "🐴", "🦄", "🐮", "🐷", "🐗", "🦓", "🐔", "🐧", "🐦", "🐤", "🐣", "🐥", "🦆", "🦅", "🦉", "🦇", "🦊", "🐺", "🐗", "🦌", "🐴", "🦄", "🐝", "🐛", "🦋", "🐌", "🐞", "🐜", "🦗", "🕷️", "🦂", "🦟", "🦠", "🐢", "🐍", "🦖", "🦕", "🐙", "🦑", "🦐", "🦞", "🦀", "🐡", "🐠", "🐟", "🐬", "🐳", "🐋", "🦈", "🐊", "🐅", "🐆", "🦓", "🦍", "🦏", "🐘", "🦒", "🐫", "🦘", "🦙", "🦌", "🐃", "🐄", "🐎", "🐖", "🦛", "🐗", "🦔", "🦝", "🦡","🌱", "🌿", "🍀", "🍁", "🍂", "🍃", "🌾", "🌻", "🌷", "🌼", "🌹", "🌸", "🍄", "🍅", "🍇", "🍈", "🍉", "🍊", "🍋", "🍌", "🍍", "🥭", "🍎", "🍏", "🍐", "🍑", "🍒", "🍓", "🥝", "🥑", "🍆", "🥦", "🥬", "🥒", "🌶️", "🌽", "🍄", "🥔", "🍞", "🥖", "🥨", "🥯", "🥐", "🥞", "🧇", "🧀", "🥚", "🍳", "🥓", "🥩", "🍗", "🥪", "🌭", "🍔", "🍟", "🍕", "🍝", "🥫", "🍛", "🍜", "🍲", "🍣", "🍱", "🥟", "🦪", "🍤", "🍥", "🥠", "🍦", "🍧", "🍨", "🍩", "🍮", "🍰", "🧁", "🎂", "🍯", "🍭", "🍬", "🍫", "🍪", "🥮", "🍩", "🧈","🍺", "🍻", "🥂", "🍷", "🍸", "🍹", "🍾", "🥡"];

let arrayParejasSeleccionadas = []
let arrayParejasRepetidas = []
const cantidadDeParejas = 6
let cartasVolteadas  =[]
let botonComprobar = document.querySelector("#botonComprobar")
let botonReiniciar = document.querySelector("#botonReiniciar")


/**
 * Funcción pinta las tarjetas en el documento
 */
function dibujarTarjetas(){
    let fragmento = document.createDocumentFragment();
    
    arrayParejasRepetidas.forEach(elemento => {
        
        let tempalteClon = template.content.cloneNode(true)

        tempalteClon.querySelector(".pEmoticono").textContent = elemento
        tempalteClon.querySelector(".carta").classList.add(elemento)
        
        fragmento.appendChild(tempalteClon)

    });
    contenedorTodasCartas.appendChild(fragmento)
    activarEventos()

}

/**
 * Función crea parejas y las pone en posiciones aleatorias del array
 */
function generarParejas(){
    
    arrayParejasRepetidas = structuredClone(arrayParejasSeleccionadas)

    arrayParejasSeleccionadas.forEach(i =>{
        
        arrayParejasRepetidas.splice(generarNumeroRandom(arrayParejasRepetidas.length),0,i)
    })

  dibujarTarjetas()
}
/**
 * Función genera un número aleatorio
 * @param {Number} maximo número máximo que se generará 
 * @returns {Number} número aleatorio generado
 */
const generarNumeroRandom = (maximo =>Math.floor(Math.random()*maximo))

/**
 * Funcción selecciona emotionos del array de emoticonos
 */
const seleccionarParejas = ()=>{
    
    for(let i = 0; i< cantidadDeParejas; i++){
        if(!arrayParejasSeleccionadas.includes(emoticonos[generarNumeroRandom(emoticonos.length-1)])){
            arrayParejasSeleccionadas.push(emoticonos[generarNumeroRandom(emoticonos.length-1)])
        }else{
            i--
        } 
    }
    generarParejas()
}

/**
 * Función voltea las cartas volteadas que no coinciden
 */
function volverVoltarCartas(){
    cartasVolteadas[0].childNodes[1].classList.remove("girarFrente")
    cartasVolteadas[0].childNodes[3].classList.remove("girarEspalda")
    cartasVolteadas[1].childNodes[1].classList.remove("girarFrente")
    cartasVolteadas[1].childNodes[3].classList.remove("girarEspalda")
    cartasVolteadas = []
}

/**
 * Función comprueba la igualda de las cartas volteadas
 * @param {Array} cartasVolteadasParametroFuncion array de cartas volteadas 
 */
function comprobarIgualdad(cartasVolteadasParametroFuncion){
    
    if(cartasVolteadasParametroFuncion[0].classList[1]==cartasVolteadasParametroFuncion[1].classList[1]){
        cartasVolteadas = []
        console.log(cartasVolteadas)
        console.log("SI SON")
        
    }else{
        
        setTimeout(volverVoltarCartas,1000)
        
    }
}

/**
 * Función volta las cartas seleccionadas
 * @param  carta div carta seleccionada
 */
function voltearCarta(carta){
    
    carta.parentNode.classList.add("girarEspalda")
    carta.parentNode.previousSibling.previousSibling.classList.add("girarFrente")
    cartasVolteadas.push(carta.parentNode.parentNode)
    if(cartasVolteadas.length == 2){
        desactivarEventos()
        comprobarIgualdad(cartasVolteadas)
        
        
    }

}
/**
 * Función activa los eventos una vez pintadas las cartas
 */
function activarEventos(){
    
    contenedorTodasCartas.addEventListener("click", evento =>{
        
        if(evento.target.tagName == "IMG"){
            voltearCarta(evento.target)
        }
    })

}

/**
 * Función desactiva los eventos
 */
function desactivarEventos(){
    
    contenedorTodasCartas.removeEventListener("click", evento =>{
        
        if(evento.target.tagName == "IMG"){
            voltearCarta(evento.target)
        }
    })
}

boton.addEventListener("click",()=>{
    
    window.location.reload()
})

//Llamo a seleccionarParejas para iniciar las cadena de funciones para mostrar las cartas 
seleccionarParejas()





