
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




function desbordeIzqMayus(offset, valorLetra) {
  const nuevoValor = valorLetra - offset;
  if (nuevoValor > limInfMayus) {
    return nuevoValor;
  }

  const desborde = offset % (limSupMayus - limInfMayus);
  const valor = (valorLetra - desborde) + 1;
  if (valor > limInfMayus) {
    return valor;
  }
  //const diferencia= valor-limInfMayus;
  const valor2 = (limSupMayus + 1) + (valor - limInfMayus);
  const desbordeIzq = valor2 > limSupMayus;
  if (desbordeIzq) {
    return limInfMayus;
  }
  else {
    return valor2;
  }
}

function desbordeIzqMinus(offset, valorLetra) {
  const nuevoValor = valorLetra - offset;

  if (nuevoValor > limInfMinus) {
    return nuevoValor;
  }

  const desborde = offset % (limSupMinus - limInfMinus);
  const valor = (valorLetra - desborde) + 1;
  if (valor > limInfMinus) {
    return valor;
  }
  //const diferencia= valor-limInfMayus;
  const valor2 = (limSupMinus + 1) + (valor - limInfMinus);
  const desbordeIzq = valor2 > limSupMinus;
  if (desbordeIzq) {
    return limInfMinus;
  }
  else {
    return valor2;
  }
}




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
      palabraCifrada += descifrarLetra(letra, offset);
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
    const valorLetra = desbordeDerMinus(offset, valorAscii);

    return String.fromCharCode(valorLetra);

  }

  return letra;

}




function descifrarLetra(letra, offset) {

  const valorAscii = letra.charCodeAt();

  if (valorAscii >= 65 && valorAscii <= 90) {

    const valorLetra = desbordeIzqMayus(offset, valorAscii);

    return String.fromCharCode(valorLetra);
  }
  if (valorAscii >= 97 && valorAscii <= 122) {

    const valorLetra = desbordeIzqMinus(offset, valorAscii);

    return String.fromCharCode(valorLetra);
  }

  return letra;

}



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
