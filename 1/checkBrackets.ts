export function isValidBrackets(input: string): boolean {
  const stack: string[] = []

  const map: Record<string, string> = {
    ')': '(',
    ']': '[',
    '}': '{'
  }

  for (const char of input) {
    if (char === '(' || char === '[' || char === '{') {
      stack.push(char)
    }
    else if (char === ')' || char === ']' || char === '}') {
      const last = stack.pop()
      if (last !== map[char]) {
        return false
      }
    }
  }

  return stack.length === 0
}
