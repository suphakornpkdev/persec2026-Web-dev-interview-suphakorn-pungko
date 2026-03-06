import { sortStrings } from "./sortString.js"

console.log("========= ข้อ 2 =========")
const tests = [
    {
        input: ["TH19", "SG20", "TH2"],
        expected: ["SG20", "TH2", "TH19"]
    },
    {
        input: ["TH10", "TH3Netflix", "TH1", "TH7"],
        expected: ["TH1", "TH3Netflix", "TH7", "TH10"]
    }
]

for (const { input, expected } of tests) {
    const result = sortStrings([...input])

    const isPass = JSON.stringify(result) === JSON.stringify(expected)
    console.log(`${input.join(", ")} => ${result.join(", ")} ${isPass ? "Pass" : "Fail"}`)
}
