export function groupConsecutive(numbers) {
  if (!Array.isArray(numbers) || !numbers.every(Number.isInteger)) {
    throw new TypeError("groupConsecutive: se esperaba un array de enteros");
  }

  const groups = [];

  for (const number of numbers) {
    const lastGroup = groups.at(-1);
    const lastValue = lastGroup?.at(-1);

    if (lastGroup && number === lastValue + 1) {
      lastGroup.push(number);
    } else {
      groups.push([number]);
    }
  }

  return groups;
}

export function longestConsecutiveGroup(numbers) {
  return groupConsecutive(numbers).reduce(
    (longest, group) => (group.length > longest.length ? group : longest),
    []
  );
}
