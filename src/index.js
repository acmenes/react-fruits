import fruits from './fruits'
import { choice, remove } from './helpers'

let fruit = choice(fruits)

console.log(`I'd like one ${fruit} please.`)
console.log(`Here is your ${fruit}.`)
console.log(`Yum! May I have another?`)

let remaining = remove(fruit, fruits)

console.log(`I'm sorry, we are all out of ${fruit}`)