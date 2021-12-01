import { dayone } from "./day1/day1"

const date: Date = new Date()
const year: number = date.getFullYear()

console.log(`"name": "AdventOfCode${year}"`)

dayone()