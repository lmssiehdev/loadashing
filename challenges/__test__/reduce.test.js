import { reduce } from "../javascript/reduce";
import { describe, expect, test } from "vitest";

describe("reduce", () => {
  test("should correctly sum up an array of numbers", () => {
    const numbers = [1, 2, 3, 4, 5];
    const sum = reduce(
      numbers,
      (accumulator, currentValue) => accumulator + currentValue,
      0
    );
    expect(sum).toEqual(15);
  });

  test("should correctly flatten a nested array", () => {
    const nestedArray = [[1, 2], [3, 4], [5]];
    const flattenedArray = reduce(
      nestedArray,
      (accumulator, currentValue) => accumulator.concat(currentValue),
      []
    );
    expect(flattenedArray).toEqual([1, 2, 3, 4, 5]);
  });

  test("should correctly count the number of occurrences of a specific element", () => {
    const names = [
      "Alice",
      "Bob",
      "Charlie",
      "Alice",
      "David",
      "Charlie",
      "Alice",
    ];
    const aliceCount = reduce(
      names,
      (accumulator, currentValue) => {
        if (currentValue === "Alice") {
          return accumulator + 1;
        } else {
          return accumulator;
        }
      },
      0
    );
    expect(aliceCount).toEqual(3);
  });

  test("should correctly concatenate an array of strings without an initial value", () => {
    const strings = ["foo", "bar", "baz"];
    const concatenatedString = reduce(
      strings,
      (accumulator, currentValue) => accumulator + currentValue
    );
    expect(concatenatedString).toEqual("foobarbaz");
  });

  test("should correctly compute the sum of the squares of an array of numbers using the index and array parameters", () => {
    const numbers = [1, 2, 3, 4, 5];
    const sumOfSquares = reduce(
      numbers,
      (accumulator, currentValue, index, array) => {
        const squaredValue = currentValue * currentValue;
        if (index === array.length - 1) {
          return accumulator + squaredValue;
        } else {
          return accumulator + squaredValue;
        }
      },
      0
    );
    expect(sumOfSquares).toEqual(55);
  });
});
