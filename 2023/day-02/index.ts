type Game = {
	id: number
	results: { red: number; blue: number; green: number }[]
}

type colors = "red" | "blue" | "green"

export const part1 = (
	input: string,
	total: {
		red: number
		blue: number
		green: number
	}
) => {
	const games = parseGames(input)
	const possible = games.filter((game) => {
		return game.results.every((pull) => {
			return Object.keys(pull).every((color) => {
				return pull[color as colors] <= total[color as colors]
			})
		})
	})
	return possible.map((game) => game.id).reduce((a, b) => a + b, 0)
}

export const part2 = (input: string) => {
	const games = parseGames(input)
	const minimumNeeded: {
		id: number
		red: number
		blue: number
		green: number
	}[] = []
	games.map((game) => {
		const minimum = {
			id: game.id,
			red: 0,
			blue: 0,
			green: 0
		}
		game.results.map((pull) => {
			Object.keys(pull).map((color) => {
				minimum[color as colors] = Math.max(
					minimum[color as colors],
					pull[color as colors]
				)
			})
		})
		minimumNeeded.push(minimum)
	})
	return minimumNeeded
		.map((game) => {
			return game.red * game.blue * game.green
		})
		.reduce((a, b) => a + b, 0)
}

const parseGames = (input: string): Game[] => {
	const games: Game[] = []
	input.split("\n").map((line) => {
		const [gameInfo, results] = line.split(": ")
		const id = parseInt(gameInfo.split(" ")[1])
		const game: Game = {
			id,
			results: []
		}
		results.split("; ").map((pull) => {
			const pullResults = {
				red: 0,
				blue: 0,
				green: 0
			}
			pull.split(", ").map((cube) => {
				const [num, color] = cube.split(" ")
				pullResults[color as colors] += parseInt(num)
			})
			game.results.push(pullResults)
		})
		games.push(game)
	})
	return games
}
