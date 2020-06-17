// Your code here!

const colorCombinator = require('./color-combinator.js')
const colorDeconstructor = require('./color-deconstructor.js')

let input1 = getInput(0)
console.log(input1)
let input2 = getInput(1)
console.log(input2)
//3. Now let's check if that FIRST input is `undefined`--this means that they didn't give you any colors at all! Send them a message telling them that they need to enter a color.
if (input1 === undefined){
  console.log("You need to enter a color!");
} else if (input1 !== undefined && input2 === undefined){

let deconstructorresult = colorDeconstructor(input1);
console.log(deconstructorresult)

} else if (input1 !== undefined && input2 !== undefined ){
let combinatorresult = colorCombinator(input1, input2);
console.log(combinatorresult)
}

//


// Our helper function here! Don't  touch!
function getInput(i) {
  return process.argv[i + 2];
}
