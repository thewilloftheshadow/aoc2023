import { describe, expect, it } from "vitest"
import { part1, part2 } from "./index"
import { readFileSync } from "fs"

describe("day-02", () => {
	const input = readFileSync(`${__dirname}/example.txt`).toString()
	it("should read example.txt", async () => {
		expect(input).toEqual("example")
	})

	it("should pass for part 1", () => {
		expect(part1("1")).toEqual(1)
	})

	it("should pass for part 2", () => {
		expect(part2("2")).toEqual(2)
	})
})
