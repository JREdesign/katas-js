export function groupConsecutive(numbers) {
  if (!Array.isArray(numbers)) {
    throw new TypeError("groupConsecutive: numbers debe ser un array");
  }

  if (!numbers.every(Number.isInteger)) {
    throw new TypeError("groupConsecutive: todos los valores deben ser enteros");
  }

  return numbers.reduce((groups, number) => {
    const lastGroup = groups.at(-1);

    if (lastGroup && number === lastGroup.at(-1) + 1) {
      lastGroup.push(number);
    } else {
      groups.push([number]);
    }

    return groups;
  }, []);
}

export function summarizeConsecutiveGroups(numbers) {
  return groupConsecutive(numbers).map((group) => ({
    start: group[0],
    end: group.at(-1),
    length: group.length,
  }));
}
