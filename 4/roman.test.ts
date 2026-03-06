import { intToRoman, romanToInt } from "./roman.js"

console.log("========= ข้อ 4 =========")
function test(name: string, result: any, expected: any) {
    const pass = result === expected

    console.log(`${name}`)
    console.log("Expected:", expected)
    console.log("Result  :", result)
    console.log(pass ? "Pass" : "Fail")
    console.log("----------------")
}

// Int -> Roman
test("1989 -> Roman", intToRoman(1989), "MCMLXXXIX")
test("2000 -> Roman", intToRoman(2000), "MM")
test("68 -> Roman", intToRoman(68), "LXVIII")
test("109 -> Roman", intToRoman(109), "CIX")

// Roman -> Int
test("MCMLXXXIX -> Int", romanToInt("MCMLXXXIX"), 1989)
test("MM -> Int", romanToInt("MM"), 2000)
test("LXVIII -> Int", romanToInt("LXVIII"), 68)
test("CIX -> Int", romanToInt("CIX"), 109)
