import calculator from "../src/calculator";

test("adds two numbers", () => {
    expect(calculator.add(1, 2)).toBe(3);
    expect(calculator.add(-1, -1)).toBe(-2);
    expect(calculator.add(-1, 1)).toBe(0);
    expect(calculator.add(0, 0)).toBe(0);
    expect(calculator.add(0.1, 0.2)).toBeCloseTo(0.3);
    expect(calculator.add(1.5, 0.5)).toBeCloseTo(2);
    expect(calculator.add(-1, 0.3)).toBeCloseTo(-0.7);
    expect(calculator.add(1e10, 1e10)).toBe(2e10);
});

test("subtracts two numbers", () => {
    expect(calculator.subtract(5, 3)).toBe(2);
    expect(calculator.subtract(3, 5)).toBe(-2);
    expect(calculator.subtract(0, 0)).toBe(0);
    expect(calculator.subtract(-1, -2)).toBe(1);
    expect(calculator.subtract(-1, 2)).toBe(-3);
    expect(calculator.subtract(1, -2)).toBe(3);
    expect(calculator.subtract(1, 0.5)).toBeCloseTo(0.5);
    expect(calculator.subtract(-1, 0.5)).toBeCloseTo(-1.5);
    expect(calculator.subtract(-1, -0.5)).toBeCloseTo(-0.5);
});

test("multiplies two numbers", () => {
    expect(calculator.multiply(2, 3)).toBe(6);
    expect(calculator.multiply(-2, 3)).toBe(-6);
    expect(calculator.multiply(0, 3)).toBe(0);
    expect(calculator.multiply(-3, -3)).toBe(9);
    expect(calculator.multiply(3, 1.5)).toBeCloseTo(4.5);
    expect(calculator.multiply(3.14, -2)).toBeCloseTo(-6.28);
    expect(calculator.multiply(0.5, 0.5)).toBeCloseTo(0.25);
    expect(calculator.multiply(1e10, 1e10)).toBeCloseTo(1e20);
});

test("divides two numbers", () => {
    expect(calculator.divide(6, 3)).toBe(2);
    expect(calculator.divide(-6, 3)).toBe(-2);
    expect(calculator.divide(6, -3)).toBe(-2);
    expect(calculator.divide(0, 3)).toBe(0);
    expect(calculator.divide(3, 2)).toBeCloseTo(1.5);
    expect(calculator.divide(1, 2)).toBeCloseTo(0.5);
    expect(calculator.divide(0.3333, 0.3333)).toBeCloseTo(1);
    expect(calculator.divide(1e10, 1e10)).toBeCloseTo(1);
    expect(calculator.divide(1e10, 1e-10)).toBeCloseTo(1e20);
    expect(calculator.divide(1e-10, 1e-10)).toBeCloseTo(1);

});

test("throws an error when dividing by zero", () => {
    expect(() => calculator.divide(6, 0)).toThrow("Cannot divide by zero");
});