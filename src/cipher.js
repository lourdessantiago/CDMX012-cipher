/* const fnArrow = (x) => {
  console.log(x.toLowerCase());
  return x.toLowerCase();
}; flecha 

() => {}

(parametros) => { codigo ... }

const fnAnonymus = function (x) {}; aninima 

function conNombre (x) {} con nombre*/

const limInfMayus = 65;
const limSupMayus = 90;
const limInfMinus = 97;
const limSupMinus = 122;

function desbordeDerMayus(offset, valorLetra) {
  const nuevoValor = offset + valorLetra;
  if (nuevoValor < limSupMayus) {
    return nuevoValor;
  }

  const desborde = offset % (limSupMayus - limInfMayus);
  const valor = (valorLetra + desborde) - 1;
  if (valor < limSupMayus) {
    return valor;
  }
  const valor2 = (limInfMayus - 1) + (valor - limSupMayus);
  const desbordeIzq = valor2 < limInfMayus;
  if (desbordeIzq) {
    return limSupMayus;
  }
  else {
    return valor2;
  }
}

function desbordeDerMinus(offset, valorLetra) {
  const nuevoValor = offset + valorLetra;
  if (nuevoValor < limSupMinus) {
    return nuevoValor;
  }

  const desborde = offset % (limSupMinus - limInfMinus);
  const valor = (valorLetra + desborde) - 1;
  if (valor < limSupMinus) {
    return valor;
  }
  const valor2 = (limInfMinus - 1) + (valor - limSupMinus);
  const desbordeIzq = valor2 < limInfMinus;
  if (desbordeIzq) {
    return limSupMinus;
  }
  else {
    return valor2;
  }
}




/**
 * obtener el nuevo valor, offset va a caminar hacia la izquierda por lo tanto es una resta.  
 *  ver que el nuevo valor no sea menor al liminte inferior pero si es mayor o = entonces retornar nuevo valor
 * sacer desborde
 * si desborde es mayor al mlimite entonces se pondra valor 
 * 
 */


/* function desbordeIzqMayus(offset, valorletra) {
  const nuevoValor = offset + valorletra;
  if (nuevoValor >= limInfMayus) {
    return nuevoValor;
  }

  const desborde = offset % (limInfMayus - limSupMayus);
  const valor = (valorletra + desborde) - 1;
  if (valor >= limInfMayus) {
    return valor;
  }
  const valor2 = (limSupMayus - 1) + (valor - limSupMayus);
  const desbordeIzq = valor2 >= limSupMinus;
  if (desbordeIzq) {
    return limInfMayus;
  }
  else {
    return valor2;
  }
} */




function encode(offset, string) {
  //console.log(offset, string)
  const palabras = string.trim().split(' ');
  //console.log(palabras)
  //console.log(offset.value);
  let mensajeCifrado = [];
  for (const palabra of palabras) {
    let palabraCifrada = '';
    for (const letra of palabra) {
      palabraCifrada += cifrarLetra(letra, + offset);
    }

    mensajeCifrado.push(palabraCifrada);
  }
  //console.log(mensajeCifrado);
  // console.log(mensajeCifrado.join(' '));

  return mensajeCifrado.join(' ');
}

function decode(offset, string) {
  //console.log(offset, string)
  const palabras = string.trim().split(' ');
  //console.log(palabras)
  //console.log(offset.value);
  let mensajeCifrado = [];
  for (const palabra of palabras) {
    let palabraCifrada = '';
    for (const letra of palabra) {
      palabraCifrada += cifrarLetra(letra, - offset);
    }
    mensajeCifrado.push(palabraCifrada);
  }
  //console.log(mensajeCifrado);
  // console.log(mensajeCifrado.join(' '));
  return mensajeCifrado.join(' ');

}





function cifrarLetra(letra, offset) {

  const valorAscii = letra.charCodeAt();


  if (valorAscii >= 65 && valorAscii <= 90) {
    const valorLetra = desbordeDerMayus(offset, valorAscii);

    return String.fromCharCode(valorLetra);
  }

  if (valorAscii >= 97 && valorAscii <= 122) {
    const valorLetraMinus = desbordeDerMinus(offset, valorAscii);
    
    return String.fromCharCode(valorLetraMinus);
  
  }
 
  return letra;

}




function descifrarLetra(letra, offset) {
  
  const valorAscii = letra.charCodeAt();

  if (valorAscii >= 65 && valorAscii <= 90) {

    const valorLetra = (offset, valorAscii)

    return String.fromCharCode(valorLetra - offset);
  }
  if (valorAscii >= 122 && valorAscii <= 97) {
    return String.fromCharCode(valorAscii - offset);
  }

  return letra;

}

/* function desbordeIzqMayus(offset, valorLetra) {
  const nuevoValor = offset + valorLetra;
  if (nuevoValor < limSupMinus) {
    return nuevoValor;
  }

  const desborde = offset % (limSupMinus - limInfMinus);
  const valor = (valorLetra + desborde) - 1;
  if (valor < limSupMinus) {
    return valor;
  }
  const valor2 = (limInfMinus - 1) + (valor - limSupMinus);
  const desbordeIzq = valor2 < limInfMinus;
  if (desbordeIzq) {
    return limSupMinus;
  }
  else {
    return valor2;
  }
} */



// cifrarTexto: (nombre) => "Mi nombre es:"+ nombre,
// ...
const cipher = {
  cifrarLetra, descifrarLetra, encode, decode,
} // export default cipher;
export default cipher;

//const letraCifrada= String.fromCharCode(valorAscii+1)
// return `la letra es: ${letra} => ${letraCifrada}`
//console.log(typeof saltos)
//return String.fromCharCode(valorAscii + offset);
