export function groupConsecutive(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
    throw new TypeError("groupConsecutive: se esperaba un array de enteros");
  }

  return numbers.reduce((groups, number) => {
    const last = groups.at(-1);

    number === last?.at(-1) + 1 ? last.push(number) : groups.push([number]);

    return groups;
  }, []);
}

export const countConsecutiveGroups = (numbers) =>
  groupConsecutive(numbers).length;
