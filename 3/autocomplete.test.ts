import { autocomplete } from "./autocomplete.js";

console.log("========= ข้อ 3 =========")
function test(search: string, items: string[], maxResult: number, expected: string[]) {
    const result = autocomplete(search, items, maxResult);

    console.log("Expected:", expected);
    console.log("Result:", result);

    if (JSON.stringify(result) === JSON.stringify(expected)) {
        console.log("Pass");
    } else {
        console.log("Fail");
    }
    console.log("----------------");
}

test("th", ["Mother", "Think", "Worthy", "Apple", "Android"], 2, ["Think", "Mother"]);
