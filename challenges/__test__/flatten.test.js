import { flatten } from "../javascript/flatten";
import { describe, expect, test } from "vitest";

describe("flatten", () => {
  test("should return a flattened array", () => {
    expect(flatten([1, 2, [3, 4], 5])).toEqual([1, 2, 3, 4, 5]);
    expect(flatten([[1, 2], 3, [4, [5, 6]], 7])).toEqual([1, 2, 3, 4, 5, 6, 7]);
    expect(flatten([])).toEqual([]);
    expect(flatten([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
    expect(flatten([[1, 2], [], [3, [4, []]], 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("should not modify the original array", () => {
    const arr = [1, [2, [3, [4]]]];
    flatten(arr);
    expect(arr).toEqual([1, [2, [3, [4]]]]);
  });
});
