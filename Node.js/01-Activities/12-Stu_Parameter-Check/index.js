console.log(process.argv);
const arg1 = process.argv [2]
const arg2 = process.argv [3]

console.log(arg1, arg2);

if (arg1 && arg2 && arg1 === arg2) {
console.log("SAME")
} else {
    console.log("NOT SAME")
}