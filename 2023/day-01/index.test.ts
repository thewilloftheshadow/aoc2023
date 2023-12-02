import { describe, expect, it } from "vitest"
import { readFileSync } from "fs"
import { part1, part2 } from "./index"

describe("day-02", () => {
	const input = readFileSync(`${__dirname}/example.txt`).toString()
	it("should read example.txt", async () => {
		expect(input).not.toBeNull()
	})

	it("should pass for part 1", () => {
		expect(part1(input)).toEqual(142)
	})

	const input2 = readFileSync(`${__dirname}/example2.txt`).toString()
	it("should read example2.txt", async () => {
		expect(input).not.toBeNull()
	})

	it("should pass for part 2", () => {
		expect(part2(input2)).toEqual(281)
	})
})
