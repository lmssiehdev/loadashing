import { describe, expect, test, vi } from "vitest";
import { once } from "../javascript/once";

describe("once", () => {
  test("should restrict callback to be invoked at most once", () => {
    const callback = vi.fn();
    const restrictedCallback = once(callback);

    // Call the restrictedCallback twice
    restrictedCallback();
    restrictedCallback();

    // Expect that the callback was only called once
    expect(callback).toHaveBeenCalledTimes(1);
  });
});
