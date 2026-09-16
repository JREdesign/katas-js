import { describe, expect, it } from "vitest";
import { resolveAll } from "./resolve-all.js";

describe("resolveAll", () => {
  it("resuelve todas las tareas y conserva el orden de resultados", async () => {
    const tasks = [
      async () => 1,
      async () => "dos",
      async () => true,
    ];

    await expect(resolveAll(tasks)).resolves.toEqual([1, "dos", true]);
  });

  it("rechaza si alguna tarea falla", async () => {
    const error = new Error("fallo");
    const tasks = [
      async () => "ok",
      async () => {
        throw error;
      },
    ];

    await expect(resolveAll(tasks)).rejects.toBe(error);
  });
});
