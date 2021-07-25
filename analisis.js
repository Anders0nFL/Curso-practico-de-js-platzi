// Funcion que calcula la mediana de dos listas, la general y el top 10%
//Utils
function ordenar(lista) {
  lista.sort(function (a, b) {
    return a - b;
  });
  return lista;
}
function mediana(lista) {
  let mediana = 0;
  const mitadLista = parseInt(lista.length / 2);
  if (lista.length % 2 === 0) {
    mediana = (lista[mitadLista] + lista[mitadLista - 1]) / 2;
  } else {
    mediana = lista[mitadLista];
  }
  return mediana;
}
function calcularMediana(pais) {
  let salariosPromedio = [];
  let top = 10;
  let spliceStart = 0;
  let elementosCorte = 0;
  let listaDesordenada = pais.map(function (persona) {
    return persona.salary;
  });
  const lista = ordenar(listaDesordenada);
  spliceStart = parseInt((lista.length * (100 - top)) / 100);
  elementosCorte = lista.length - spliceStart;
  const listaTop = lista.splice(spliceStart, elementosCorte);
  salariosPromedio[0] = mediana(lista);
  salariosPromedio[1] = mediana(listaTop);
//   console.log(lista);
//   console.log(listaTop);
  return salariosPromedio;
}
