import { partone, parttwo } from "./day1/day1"

const date: Date = new Date()
const year: number = date.getFullYear()

console.log( `"Advent_Of_Code${year}"` )

console.log(`Part One: ${partone()}, Part Two: ${parttwo()}`)