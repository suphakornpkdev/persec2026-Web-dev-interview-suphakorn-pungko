import { isValidBrackets } from "./checkBrackets.js"

console.log("========= ข้อ 1 =========")
const tests: Record<string, boolean> = {
  "()": true,
  "([]]": false,
  "([{}])": true,
  "([[{}]]]": false,
  ")": false,
  "(]}])": false,
  "([)]": false,
  "{": false
}

for (const [input, expected] of Object.entries(tests)) {
  const result = isValidBrackets(input)
  console.log(`${input} => ${result} ${result === expected ? "Pass" : "Fail"}`)
}
