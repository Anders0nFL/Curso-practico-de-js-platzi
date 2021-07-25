//Codigo del cuadrado--------------------------------------------------
console.group("Cuadrado");

// const ladoCuadrado=5;

// console.log("Lados del cuadrado miden: "+ladoCuadrado + "cm");

function perimetroCuadrado(ladoCuadrado) {
  return ladoCuadrado * 4;
  // console.log("El perimetro del cuadrado mide: "+perimetroCuadrado + "cm");
}

function areaCuadrado(ladoCuadrado) {
  return ladoCuadrado * ladoCuadrado;
  //   console.log("El area del cuadrado mide: " + areaCuadrado + "cm^2");
}

console.groupEnd();

//Codigo del triangulo ----------------------------------------------------------
console.group("Triangulo");

/* const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5; */

/* console.log(
  "Lados del Triangulo miden: " +
    ladoTriangulo1 +
    "cm  " +
    ladoTriangulo2 +
    "cm  " +
    baseTriangulo +
    "cm  "
);
console.log("La altura del triangulo es: " + alturaTriangulo + "cm");
 */
function perimetroTriangulo(ladoTriangulo1, ladoTriangulo2, baseTriangulo) {
  return parseFloat(ladoTriangulo1) +parseFloat(ladoTriangulo2) +parseFloat(baseTriangulo);
  // console.log("El perimetro del cuadrado mide: " + perimetroTriangulo + "cm");
}

function areaTriangulo(baseTriangulo, alturaTriangulo) {
  return (baseTriangulo * alturaTriangulo) / 2;
  // console.log("El area del Triangulo mide: " + areaTriangulo + "cm^2");
}
console.groupEnd();

// Codigo Circulo------------------------------------------------------

console.group("Circulo");

// const radioCirculo = 4;

function diametroCirculo(radioCirculo) {
  return radioCirculo * 2;
}
const pi = Math.PI;

/* console.log(
  "El radio del circulo miden: " +
    radioCirculo +
    "cm y el diametro es: " +
    diametroCirculo +
    "cm"
); */

function perimetroCirculo(radioCirculo) {
  const diametro = diametroCirculo(radioCirculo);
  return diametro * pi;
  // console.log("El perimetro del circulo mide: " + perimetroCirculo + "cm");
}

function areaCirculo(radioCirculo) {
  return radioCirculo * radioCirculo * pi;
  // console.log("El area del circulo mide: " + areaCirculo + "cm^2");
}
console.groupEnd();

//Interactuando con HTML--------------------------------------------------------
//Interaccion Cuadrado-----------------
function calcularPerimetroCuadrado() {
  const lados = document.getElementById("inputCuadrado");
  const resultado = document.getElementById("resultadoCuadrado");
  const valor = perimetroCuadrado(lados.value);
  resultado.innerHTML = `El resultado es ${valor} cm `;
}

function calcularAreaCuadrado() {
  const lados = document.getElementById("inputCuadrado");
  const resultado = document.getElementById("resultadoCuadrado");
  const valor = areaCuadrado(lados.value);
  resultado.innerHTML = `El resultado es ${valor} cm^2 `;
}

//interaccion Triangulo----------------
function calcularPerimetroTriangulo() {
  const lado1 = document.getElementById("inputTrianguloL1");
  const lado2 = document.getElementById("inputTrianguloL2");
  const base = document.getElementById("inputTrianguloB");
  const resultado = document.getElementById("resultadoTriangulo");
  const valor = perimetroTriangulo(lado1.value,lado2.value,base.value);
  resultado.innerHTML = `El resultado es ${valor} cm `;
}

function calcularAreaTriangulo() {
    const base = document.getElementById("inputTrianguloB");
    const altura = document.getElementById("inputTrianguloA");
    const resultado = document.getElementById("resultadoTriangulo");
    const valor = areaTriangulo(base.value,altura.value);
    resultado.innerHTML = `El resultado es ${valor} cm^2 `;
}

//Interaccion circulo----------------------
function calcularPerimetroCirculo() {
    const radio = document.getElementById("inputCirculo");
    const resultado = document.getElementById("resultadoCirculo") ;
    const valor = perimetroCirculo(radio.value);
    resultado.innerHTML = `El resultado es ${valor} cm `;
  }
  
  function calcularAreaCirculo() {
    const radio = document.getElementById("inputCirculo");
    const resultado = document.getElementById("resultadoCirculo");
    const valor = areaCirculo(radio.value);
    resultado.innerHTML = `El resultado es ${valor} cm^2 `;
  }