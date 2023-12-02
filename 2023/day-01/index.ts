export const part1 = (input: string) => {
	const pairs = input.split("\n").map((line) => {
		// biome-ignore lint/style/noNonNullAssertion: this exists
		const numbers = line.match(/\d+/g)!
		const first = numbers[0]
		const last = numbers[numbers?.length - 1]
		return `${first}${last}`
	})
	return pairs.map((x) => parseInt(x)).reduce((a, b) => a + b, 0)
}

export const part2 = (input: string) => {
	const pairs = input.split("\n").map((line) => {
		let firstDigit: string | null = null
		let lastDigit: string | null = null
		for (let i = 0; i < line.length; i++) {
			const test = line.slice(i)
			const otherTest = line.slice(line.length - i)
			if (firstDigit === null) {
				const matching = getNumberWord(test)
				if (matching) {
					firstDigit = matching
				}
			}
			if (lastDigit === null) {
				const matching = getNumberWord(otherTest)
				if (matching) {
					lastDigit = matching
				}
			}
		}
		if (lastDigit === null) {
			lastDigit = firstDigit
		}
		return `${firstDigit}${lastDigit}`
	})
	console.log(pairs)
	return pairs.map((x) => parseInt(x)).reduce((a, b) => a + b, 0)
}

const getNumberWord = (input: string) => {
	const key = keys.find((key) => {
		return input.startsWith(key)
	})
	if (key) return allConversionsNumbers[key]
}

const allConversionsNumbers = {
	one: "1",
	two: "2",
	three: "3",
	four: "4",
	five: "5",
	six: "6",
	seven: "7",
	eight: "8",
	nine: "9",
	"1": "1",
	"2": "2",
	"3": "3",
	"4": "4",
	"5": "5",
	"6": "6",
	"7": "7",
	"8": "8",
	"9": "9"
} as const

const keys = Object.keys(
	allConversionsNumbers
) as (keyof typeof allConversionsNumbers)[]
