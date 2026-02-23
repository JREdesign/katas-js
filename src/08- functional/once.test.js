import { describe, it, expect, vi } from "vitest";
import { once } from "./once.js";

describe("once", () => {
  it("solo ejecuta una vez", () => {
    const fn = vi.fn(x => x + 1);
    const o = once(fn);
