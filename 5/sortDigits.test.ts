import { sortDigitsDesc } from "./sortDigits.js"

console.log("========= ข้อ 5 =========")
function test(input: number, expected: number) {
    const result = sortDigitsDesc(input)
    const pass = result === expected

    console.log(`Input: ${input}`)
    console.log("Expected:", expected)
    console.log("Result  :", result)
    console.log(pass ? "Pass" : "Fail")
    console.log("----------------")
}

test(3008, 8300)
test(1989, 9981)
test(2679, 9762)
test(9163, 9631)
