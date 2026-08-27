export async function runInSequence(tasks) {
  if (!Array.isArray(tasks)) {
    throw new TypeError("runInSequence: tasks debe ser un array");
  }

  const results = [];

  for (const [index, task] of tasks.entries()) {
    if (typeof task !== "function") {
      throw new TypeError(`runInSequence: la tarea en posición ${index} debe ser función`);
    }

    results.push(await task());
  }

  return results;
}
