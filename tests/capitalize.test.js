import capitalize from "../src/capitalize";

test("capitalizes an all lowercase string", () => {
    expect(capitalize("hello")).toBe("Hello");
});

test("capitalizes an all uppercase string", () => {
    expect(capitalize("HELLO")).toBe("HELLO");
});

test("capitalizes a mixed case string", () => {
    expect(capitalize("heLlO")).toBe("HeLlO");
});

test("capitalizes an empty string", () => {
    expect(capitalize("")).toBe("");
});

test("does not change a string with a numeric first character", () => {
    expect(capitalize("1ello")).toBe("1ello");
});

test("does not change a string with a leading space", () => {
    expect(capitalize(" ello")).toBe(" ello");
});

test("does not change a string with a special first character", () => {
    expect(capitalize("?ello")).toBe("?ello");
});

test("capitalizes a multi-word string", () => {
    expect(capitalize("hello world")).toBe("Hello world");
});

test("capitalizes a single character string", () => {
    expect(capitalize("h")).toBe("H");
});

