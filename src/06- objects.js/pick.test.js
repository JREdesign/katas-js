import { describe, it, expect } from "vitest";
import { pick } from "./pick.js";

describe("pick", () => {
  it("selecciona solo las claves indicadas", () => {
    const user = { id: 1, name: "Jorge", role: "admin" };
    expect(pick(user, ["id", "role"])).toEqual({ id: 1, role: "admin" });
  });
it("ignora claves que no existen", () => {
    expect(pick({ id: 1 }, ["id", "missing"])).toEqual({ id: 1 });
  });
