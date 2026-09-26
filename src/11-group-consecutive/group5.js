export function groupConsecutive(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("groupConsecutive: numbers debe ser un array");
  }

  if (!numbers.every(Number.isInteger)) {
    throw new TypeError("groupConsecutive: todos los valores deben ser enteros");
  }

  const groups = [];

  for (const number of numbers) {
    const currentGroup = groups[groups.length - 1];

    if (!currentGroup || number !== currentGroup[currentGroup.length - 1] + 1) {
      groups.push([number]);
      continue;
    }

    currentGroup.push(number);
  }

  return groups;
}

export function countConsecutiveGroups(numbers) {
  return groupConsecutive(numbers).length;
}
