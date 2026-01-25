// KATAS-JS/src/08-functional/throttle.test.js
import { describe, it, expect, vi } from "vitest";
import { throttle } from "./throttle.js";

describe("throttle", () => {
  it("ejecuta como máximo una vez por intervalo", () => {
    vi.useFakeTimers();
    vi.setSystemTime(new Date(0));

    const fn = vi.fn();
    const throttled = throttle(fn, 100);

    throttled(1); // t=0
    throttled(2); // t=0
    expect(fn).toHaveBeenCalledTimes(1);
    expect(fn).toHaveBeenCalledWith(1);

    vi.setSystemTime(new Date(99));
    throttled(3);
    expect(fn).toHaveBeenCalledTimes(1);

    vi.setSystemTime(new Date(100));
    throttled(4);
    expect(fn).toHaveBeenCalledTimes(2);
    expect(fn).toHaveBeenLastCalledWith(4);

    vi.useRealTimers();
  });

  it("lanza error si inputs no son válidos", () => {
    expect(() => throttle(123, 10)).toThrow(TypeError);
    expect(() => throttle(() => {}, -1)).toThrow(TypeError);
  });
});
