import caesarCipher from "../src/caesarCipher";

test("ciphers a single all-lowercase word", () => {
    expect(caesarCipher("xyz", 3)).toBe("abc");
});

test("ciphers a single all-uppercase word", () => {
    expect(caesarCipher("XYZ", 3)).toBe("ABC");
});

test("ciphers a single mixed-case word", () => {
    expect(caesarCipher("HeLLo", 3)).toBe("KhOOr");
});

test("ciphers a multi-word string", () => {
    expect(caesarCipher("Julius Caesar", 3)).toBe("Mxolxv Fdhvdu");
});

test("ciphers a string with non-alphabetical characters", () => {
    expect(caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("does not change numeric strings", () => {
    expect(caesarCipher("123", 3)).toBe("123");
});

test("works with negative keys", () => {
    expect(caesarCipher("abc", -3)).toBe("xyz");
    expect(caesarCipher("Hello World", -29)).toBe("Ebiil Tloia");
    expect(caesarCipher("Rfwhzx Hwfxxzx", -5)).toBe("Marcus Crassus");
});
