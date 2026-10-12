import { describe, expect, it } from "vitest";
import {
  countUniqueCharacters,
  uniqueCharacters,
} from "./unique-characters.js";

describe("uniqueCharacters", () => {
  it("mantiene solo la primera aparición de cada carácter", () => {
    expect(uniqueCharacters("banana")).toEqual(["b", "a", "n"]);
  });

  it("cuenta los caracteres distintos", () => {
    expect(countUniqueCharacters("banana")).toBe(3);
  });
});
