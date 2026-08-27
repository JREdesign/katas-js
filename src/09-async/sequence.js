export async function runInSequence(tasks) {
  if (!Array.isArray(tasks)) {
    throw new TypeError("runInSequence: tasks debe ser un array");
  }

  const results = [];

  for (const task of tasks) {
    if (typeof task !== "function") {
      throw new TypeError("runInSequence: cada tarea debe ser función");
    }

    results.push(await task());
  }

  return results;
}
