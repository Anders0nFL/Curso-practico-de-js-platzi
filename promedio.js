// Calcular la media aritmetica de un array------
function calcularMediaAritmetica(lista) {
  let sumaLista = 0;
  //   for (numeros of lista) {
  //     sumaLista += numeros;
  //   }
  sumaLista = lista.reduce(function (acumulado, numero) {
    return (acumulado += numero);
  });
  return sumaLista / lista.length;
}

//Calcular la mediana de un array desordenado

//Validar si es par o impar
function par(numero) {
  if (numero % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

// funcion  alternativa para ordenar de menor a mayor valor
/* function ordenar(lista) {
  for (i in lista) {
    for (elemento in lista) {
      elemento = parseInt(elemento);
      if (lista[elemento] > lista[elemento + 1]) {
        let aux = lista[elemento];
        lista[elemento] = lista[elemento + 1];
        lista[elemento + 1] = aux;
      }
    }
  }
  return lista;
} */
// Funcion para ordenar lista de menor a mayor valor
function ordenar(lista) {
  lista.sort(function (a, b) {
    return a - b;
  });
  return lista;
}

// Funcion que calcula la mediana de una lista
function calcularMediana(listaDesordenada) {
  const lista = ordenar(listaDesordenada);
  const mitadLista = parseInt(lista.length / 2);
  let mediana = 0;

  if (par(lista.length)) {
    mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;
  } else {
    mediana = lista[mitadLista];
  }
  return mediana;
}

//calcular moda -----------------------
//funcion que calcula la moda o modas en caso que exista mas de una
function calcularModa(lista) {
  let lista1count = {};
  let contador = 0;
  let posicionModa = 0;
  let multimoda = [];
  lista.map(function (elemento) {
    if (lista1count[elemento]) {
      lista1count[elemento] += 1;
      if (lista1count[elemento] > contador) {
        contador = lista1count[elemento];
      }
    } else {
      lista1count[elemento] = 1;
    }
  });

  for (valor in lista1count) {
    if (lista1count[valor] === contador) {
      multimoda[posicionModa] = valor;
      posicionModa++;
    }
  }
  return multimoda;
}
