import { describe, expect, it } from "vitest";
import { renameKey } from "./rename-key.js";

describe("renameKey", () => {
  it("cambia el nombre de una propiedad", () => {
    expect(renameKey({ name: "Jorge", age: 30 }, "name", "username")).toEqual({
      username: "Jorge",
      age: 30
    });
  });
