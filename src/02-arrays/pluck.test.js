import { describe, it, expect } from "vitest";
import { pluck } from "./pluck.js";

describe("pluck", () => {
  it("extrae valores de una clave", () => {
    const users = [{ name: "A" }, { name: "B" }];
    expect(pluck(users, "name")).toEqual(["A", "B"]);
  });
