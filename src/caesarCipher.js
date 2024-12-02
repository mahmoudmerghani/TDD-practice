function getCipheredTable(key) {
    const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
    const ALPHABET_SIZE = 26;
    const a_CODE = 97;
    
    const map = new Map();

    if (key < 0) {
        key = (key % ALPHABET_SIZE) + ALPHABET_SIZE;
    }

    for (const char of ALPHABET) {
        const cipheredCode = (char.charCodeAt(0) - a_CODE + key) % ALPHABET_SIZE;
        const cipheredChar = String.fromCharCode(cipheredCode + a_CODE);
        
        map.set(char, cipheredChar);
        map.set(char.toUpperCase(), cipheredChar.toUpperCase());
    }

    return map;
}

function caesarCipher(str, key) {
    let cipheredString = "";
    const cipheredTable = getCipheredTable(key);

    for (const char of str) {
        cipheredString += cipheredTable.get(char) || char;
    }

    return cipheredString;
}

export default caesarCipher;