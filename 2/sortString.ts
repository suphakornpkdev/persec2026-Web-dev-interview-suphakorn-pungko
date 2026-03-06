export function sortStrings(arr: string[]): string[] {
    return arr.sort((a, b) => {
        const matchA = a.match(/^([A-Za-z]+)(\d+)/);
        const matchB = b.match(/^([A-Za-z]+)(\d+)/);

        if (!matchA || !matchB) return a.localeCompare(b);

        const prefixA = matchA[1]!;
        const prefixB = matchB[1]!;

        const numA = parseInt(matchA[2]!);
        const numB = parseInt(matchB[2]!);

        if (prefixA !== prefixB) {
            return prefixA.localeCompare(prefixB);
        }

        return numA - numB;
    });
}
