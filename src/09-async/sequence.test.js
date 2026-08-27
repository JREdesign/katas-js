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

  it("devuelve un array vacío si no hay tareas", async () => {
    await expect(runInSequence([])).resolves.toEqual([]);
  });

  it("valida la entrada", async () => {
    await expect(runInSequence("no")).rejects.toThrow(TypeError);
    await expect(runInSequence([async () => 1, 2])).rejects.toThrow(TypeError);
  });
});
