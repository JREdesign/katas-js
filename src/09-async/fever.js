function sumar(a, b) {
  return a + b;
}

const resultado = sumar(5, 3);
console.log(resultado); // 8

function mostrarResultado(numero1, numero2) {
  try {
    const resultado = sumar(numero1, numero2);

    console.log(`${numero1} + ${numero2} = ${resultado}`);

    return resultado;
  } catch (error) {
    console.error(`No se pudo realizar la suma: ${error.message}`);
