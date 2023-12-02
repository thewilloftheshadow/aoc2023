import { readFileSync } from "fs"
import { part1, part2 } from "./index"

const run = async () => {
	const input = readFileSync(`${__dirname}/example.txt`).toString()
	console.log(`${input.split("\n").length} lines in input`)
	console.log(`Part 1: ${part1(input)}`)
	console.log(`Part 2: ${part2(input)}`)
}

run()
