import { describe, expect, it, vi } from "vitest";
import { runInSequence } from "./sequence.js";

describe("runInSequence", () => {
  it("ejecuta las tareas en orden y devuelve sus resultados", async () => {
    const calls = [];
    const first = vi.fn(async () => {
      calls.push("first");
      return 1;
    });
    const second = vi.fn(async () => {
      calls.push("second");
      return 2;
    });

    await expect(runInSequence([first, second])).resolves.toEqual([1, 2]);
    expect(calls).toEqual(["first", "second"]);
  });

  it("detiene la secuencia si una tarea falla", async () => {
    const first = vi.fn().mockResolvedValue("ok");
    const second = vi.fn().mockRejectedValue(new Error("boom"));
    const third = vi.fn().mockResolvedValue("no debería ejecutarse");

    await expect(runInSequence([first, second, third])).rejects.toThrow("boom");
    expect(first).toHaveBeenCalledTimes(1);
    expect(second).toHaveBeenCalledTimes(1);
    expect(third).not.toHaveBeenCalled();
  });

  it("acepta tareas síncronas además de asíncronas", async () => {
    const first = () => "a";
    const second = async () => "b";

    await expect(runInSequence([first, second])).resolves.toEqual(["a", "b"]);
  });

  it("devuelve un array vacío si no hay tareas", async () => {
    await expect(runInSequence([])).resolves.toEqual([]);
  });

  it("indica la posición de una tarea inválida", async () => {
    await expect(runInSequence([async () => 1, 2])).rejects.toThrow(
      "la tarea en posición 1 debe ser función",
    );
  });

  it("valida que tasks sea un array", async () => {
    await expect(runInSequence("no")).rejects.toThrow(TypeError);
  });
});
