import cipher from './cipher.js';

const buttonCifrar = document.querySelector('#buttonCifrar');

const buttonDescifrar = document.querySelector('#buttonDescifrar');

const mensaje = document.querySelector('#cifrarMensaje');

const mensajeListo = document.querySelector('#mensajeListo');

const offset = document.querySelector('#offset');


buttonCifrar.addEventListener('click', () => {
   
   const mensajePrueba = cipher.encode (parseInt(offset.value),mensaje.value.trim());
   mensajeListo.value = mensajePrueba;
});

buttonDescifrar.addEventListener('click', () => {
    const mensajePrueba =cipher.decode (parseInt(offset.value),mensaje.value.trim());
    mensajeListo.value =mensajePrueba;
    
    /* const palabras = encode.value.trim().split(' ');
    let mensajeDescifrado = [];
    for (const palabra of palabras) {
        let palabraDescifrada = '';
        for (const letra of palabra) {
            palabraDescifrada += cipher.descifrarLetra(letra, parseInt(offset.value));

        }
        mensajeDescifrado.push(palabraDescifrada);

    }
    mensajeListo.value = mensajeDescifrado.join(' '); */
});

// obtener valor de la caja listo
// obtener la palabras, que separe las palabras de los espacios (arreglo de las palabras que tenga el mensaje ) listo
// cifrar cada palabra









// selector
// selector de id
// variable
// query selecto
// investigar adddeventlistener (clic)
// como trabajan las funciones

