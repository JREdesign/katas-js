export function groupConsecutive(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("groupConsecutive: numbers debe ser un array");
  }

  if (!numbers.every(Number.isInteger)) {
    throw new TypeError("groupConsecutive: todos los valores deben ser enteros");
  }
  if (!numbers.every(Number.isInteger2)) {
    throw new TypeError("groupConsecutive: todos los valores deben ser enteros");
  }
  
  
  if (numbers.length === 0) {
    return [];
  }

  const groups = [[numbers[0]]];
