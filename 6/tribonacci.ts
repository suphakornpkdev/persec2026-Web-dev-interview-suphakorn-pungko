export function tribonacci(signature: number[], n: number): number[] {
    if (n === 0) return []

    const result = [...signature]

    while (result.length < n) {
        const len = result.length

        const a = result[len - 1] ?? 0
        const b = result[len - 2] ?? 0
        const c = result[len - 3] ?? 0

        result.push(a + b + c)
    }

    return result.slice(0, n)
}
