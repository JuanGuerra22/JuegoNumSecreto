
let numeroSecreto;
let intentos;
let listaNumerosSorteados = [];
let numeroMaximo = 10;
console.log(numeroSecreto);

function condicionesIniciales() {
    asignarHtml('h1', "Juego del número secreto");
    asignarHtml('p', `Escribe un número del 1 al ${numeroMaximo}`);
    numeroSecreto = geneNumSecreto();
    intentos = 1;
}

function numeroUsuario(){
    let numeroIngresado = parseInt(document.getElementById('impNumero').value);
    console.log(numeroIngresado == numeroSecreto)
    if (numeroIngresado === numeroSecreto) {
        asignarHtml('p', `Felicidades acertaste el número, en ${intentos} ${intentos === 1 ? 'Intento' : 'Intentos'}`)
        //Cuando se acierta el juego se habilita el boton Nuevo Juego, quitanto el atributo disabled
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if (numeroIngresado > numeroSecreto) {
            asignarHtml('p', 'El numero es Menor')
        } else{
            asignarHtml('p', 'El numero es Mayor')
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

//Funcion para limpiar el imput
function limpiarCaja() {
    document.getElementById('impNumero').value = '';
}

function geneNumSecreto() {
   let numeroGenerado = Math.floor(Math.random()* numeroMaximo)+1;
   console.log(numeroGenerado);
   console.log(listaNumerosSorteados);
   // Si ya sorteamos todos los numeros
   if (listaNumerosSorteados.length == numeroMaximo) {
    asignarHtml('p', 'Ya se sortearon todos los números posibles');
   } else {
   //Numero generado esta en la lista?
   //el metodo include recorre el arrgle y revisa si el numero ya esta en la lista
        if (listaNumerosSorteados.includes(numeroGenerado)) {
        return geneNumSecreto(); //recursividad 
        } else{
    //Agrega el numero generado a la lista. 
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado
        }
    }
}

function asignarHtml(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
    return;
}

function reiniciarJuego() {
    //Limpiar Caja
    limpiarCaja();
    //Indicar mensaje de intervalo de numeros
    //Generar nuevo numero aleatorio
    //Inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de Nuevo Juego
    document.getElementById('reiniciar').setAttribute('disabled', true);
}


condicionesIniciales();