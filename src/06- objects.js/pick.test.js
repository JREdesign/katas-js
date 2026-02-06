import { describe, it, expect } from "vitest";
import { pick } from "./pick.js";

describe("pick", () => {
  it("selecciona solo las claves indicadas", () => {
    const user = { id: 1, name: "Jorge", role: "admin" };
    expect(pick(user, ["id", "role"])).toEqual({ id: 1, role: "admin" });
  });
