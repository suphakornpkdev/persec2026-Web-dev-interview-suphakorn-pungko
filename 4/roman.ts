const ROMAN_MAP: [number, string][] = [
    [1000, "M"],
    [900, "CM"],
    [500, "D"],
    [400, "CD"],
    [100, "C"],
    [90, "XC"],
    [50, "L"],
    [40, "XL"],
    [10, "X"],
    [9, "IX"],
    [5, "V"],
    [4, "IV"],
    [1, "I"],
];

type RomanSymbol = "I" | "V" | "X" | "L" | "C" | "D" | "M";

const ROMAN_VALUE: Record<RomanSymbol, number> = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
};

export function intToRoman(num: number): string {
    let result = "";
    let remaining = num;

    for (const [value, symbol] of ROMAN_MAP) {
        while (remaining >= value) {
            result += symbol;
            remaining -= value;
        }
    }

    return result;
}

export function romanToInt(roman: string): number {
    const normalized = roman.toUpperCase().trim();
    let result = 0;

    for (let i = 0; i < normalized.length; i++) {
        const current = ROMAN_VALUE[normalized[i] as RomanSymbol];
        const next = ROMAN_VALUE[normalized[i + 1] as RomanSymbol];

        if (next && current < next) {
            result -= current;
        } else {
            result += current;
        }
    }

    return result;
}
