import reverseString from "../src/reverseString";

test("reverses an all-lowercase string", () => {
    expect(reverseString("hello")).toBe("olleh");
});

test("reverses an all-uppercase string", () => {
    expect(reverseString("HELLO")).toBe("OLLEH");
});

test("reverses a mixed-case string", () => {
    expect(reverseString("HeLLo")).toBe("oLLeH");
});

test("reverses an empty string", () => {
    expect(reverseString("")).toBe("");
});

test("reverses a string with special characters", () => {
    expect(reverseString("he??o")).toBe("o??eh");
});

test("reverses a string with spaces", () => {
    expect(reverseString("hello world")).toBe("dlrow olleh");
});

test("reverses a string with numbers", () => {
    expect(reverseString("12345")).toBe("54321");
});

test("reverses a single character string", () => {
    expect(reverseString("a")).toBe("a");
});

test("reverses a string with leading and trailing spaces", () => {
    expect(reverseString(" hello ")).toBe(" olleh ");
});
