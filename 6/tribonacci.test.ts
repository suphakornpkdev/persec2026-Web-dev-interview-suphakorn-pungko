import { tribonacci } from "./tribonacci.js"

console.log("========= ข้อ 6 =========")
function test(signature: number[], n: number, expected: number[]) {
    const result = tribonacci(signature, n)

    console.log("Signature:", signature)
    console.log("n:", n)
    console.log("Expected:", expected)
    console.log("Result:", result)

    const pass = JSON.stringify(result) === JSON.stringify(expected)

    console.log(pass ? "Pass" : "Fail")
    console.log("----------------")
}

test([1, 3, 5], 5, [1, 3, 5, 9, 17])
test([2, 2, 2], 3, [2, 2, 2])
test([10, 10, 10], 4, [10, 10, 10, 30])
