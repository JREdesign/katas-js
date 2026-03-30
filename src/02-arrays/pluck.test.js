import { describe, it, expect } from "vitest";
import { pluck } from "./pluck.js";

describe("pluck", () => {
  it("extrae valores de una clave", () => {
    const users = [{ name: "A" }, { name: "B" }];
    expect(pluck(users, "name")).toEqual(["A", "B"]);
  });
  it("devuelve undefined si falta la clave o no es objeto", () => {
    const mixed = [{ a: 1 }, 2, null, { b: 3 }];
    expect(pluck(mixed, "a")).toEqual([1, undefined, undefined, undefined]);
  });
