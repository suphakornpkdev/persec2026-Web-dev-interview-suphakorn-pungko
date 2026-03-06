export function sortDigitsDesc(num: number): number {
    const sorted = String(num)
        .split("")
        .sort((a, b) => Number(b) - Number(a))
        .join("");
    return Number(sorted);
}
