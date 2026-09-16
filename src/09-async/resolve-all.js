export async function resolveAll(tasks) {
  if (!Array.isArray(tasks)) {
    throw new TypeError("resolveAll: tasks debe ser un array");
  }

  for (const task of tasks) {
    if (typeof task !== "function") {
      throw new TypeError("resolveAll: cada tarea debe ser función");
    }
  }

  return Promise.all(tasks.map((task) => task()));
}
