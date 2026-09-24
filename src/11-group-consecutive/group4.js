export function groupByParity(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("groupByParity: numbers debe ser un array");
  }

  if (!numbers.every(Number.isInteger)) {
    throw new TypeError("groupByParity: todos los valores deben ser enteros");
  }

  return numbers.reduce(
    (groups, number) => {
      const key = Math.abs(number % 2) === 0 ? "even" : "odd";
      groups[key].push(number);
      return groups;
    },
    { even: [], odd: [] },
  );
}
