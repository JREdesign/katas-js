import { describe, it, expect } from "vitest";
import { swapCase } from "./swap-case.js";

describe("swapCase", () => {
  it("intercambia mayúsculas y minúsculas", () => {
    expect(swapCase("Hola Mundo")).toBe("hOLA mUNDO");
  });
