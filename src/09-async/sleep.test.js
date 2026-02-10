import { describe, it, expect, vi } from "vitest";
import { sleep } from "./sleep.js";

describe("sleep", () => {
  it("resuelve tras el tiempo indicado", async () => {
    vi.useFakeTimers();

    const p = sleep(100);
    let resolved = false;
    p.then(() => {
      resolved = true;
    });
    vi.advanceTimersByTime(99);
    await Promise.resolve();
    expect(resolved).toBe(false);

    vi.advanceTimersByTime(1);
    await Promise.resolve();
    expect(resolved).toBe(true);

    vi.useRealTimers();
  });
