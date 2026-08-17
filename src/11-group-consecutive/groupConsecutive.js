export function groupConsecutive(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("groupConsecutive: numbers debe ser un array");
  }

  if (!numbers.every(Number.isInteger)) {
    throw new TypeError("groupConsecutive: todos los valores deben ser enteros");
  }

  if (numbers.length === 0) {
    return [];
  }

  const groups = [[numbers[0]]];

  for (let i = 1; i < numbers.length; i++) {
    const current = numbers[i];
    const previous = numbers[i - 1];

    if (current === previous + 1) {
      groups[groups.length - 1].push(current);
    } else {
      groups.push([current]);
    }
  }

  return groups;
}
