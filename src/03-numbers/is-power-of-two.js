/**
 * Determina si un entero positivo seguro es una potencia de dos.
 */
export function isPowerOfTwo(number) {
  if (!Number.isSafeInteger(number) || number < 1) {
    return false;
  }

  while (number % 2 === 0) {
    number /= 2;
  }

  return number === 1;
}

/**
 * Devuelve el exponente de una potencia de dos o null si no lo es.
 */
export function powerOfTwoExponent(number) {
  return isPowerOfTwo(number) ? Math.log2(number) : null;
}
