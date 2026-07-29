import { describe, expect, it } from "vitest";
import { getInitials } from "./get-initials.js";

describe("getInitials", () => {
  it("obtiene las iniciales de un nombre", () => {
    expect(getInitials("Jorge García")).toBe("JG");
  });
  it("convierte las iniciales a mayúsculas", () => {
    expect(getInitials("ana maría lópez")).toBe("AML");
  });
