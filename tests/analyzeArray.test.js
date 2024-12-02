import analyzeArray from "../src/analyzeArray";

test("analyzes an array with positive numbers", () => {
    expect(analyzeArray([1, 2, 3, 4, 5])).toEqual({
        average: 3,
        min: 1,
        max: 5,
        length: 5,
    });
});

test("analyzes an array with negative numbers", () => {
    expect(analyzeArray([-5, -1, -2, -3, -4])).toEqual({
        average: -3,
        min: -5,
        max: -1,
        length: 5,
    });
});

test("analyzes an array with positive and negative numbers", () => {
    expect(analyzeArray([-5, -1, 2, -3, 4])).toEqual({
        average: -0.6,
        min: -5,
        max: 4,
        length: 5,
    });
});

test("analyzes an array with one element", () => {
    expect(analyzeArray([7])).toEqual({
        average: 7,
        min: 7,
        max: 7,
        length: 1,
    });
});

test("returns null for empty arrays", () => {
    expect(analyzeArray([])).toBeNull();
});
