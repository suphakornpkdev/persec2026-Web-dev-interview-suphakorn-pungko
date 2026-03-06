export function autocomplete(search: string, items: string[], maxResult: number): string[] {
    const keyword = search.toLowerCase();
    const filtered = items.filter((item) => item.toLowerCase().includes(keyword));

    const sorted = filtered.sort((a, b) => {
        const aLower = a.toLowerCase();
        const bLower = b.toLowerCase();

        const aIndex = aLower.indexOf(keyword);
        const bIndex = bLower.indexOf(keyword);

        const getRank = (word: string, index: number) => {
            if (index === 0) return 0;
            if (index === word.length - keyword.length) return 2;
            return 1;
        };

        const rankA = getRank(aLower, aIndex);
        const rankB = getRank(bLower, bIndex);

        if (rankA !== rankB) return rankA - rankB;

        return aLower.localeCompare(bLower);
    });

    return sorted.slice(0, maxResult);
}
