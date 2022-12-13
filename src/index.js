import foods from "./foods";
import { choice, remove } from "./helpers";

console.log("I'd like one RANDOMFRUIT, please.");
const randFood = choice(foods);
console.log(`Here you go: ${randFood}`);
console.log("Delicious! May I have another?");

const postRemoval = remove(foods, randFood);

console.log(`I'm sorry, we're all out. We have ${postRemoval.length} left.`);
