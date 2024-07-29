const name = "haris-bilal-you"
const repoCount = 50
// console.log(name + repoCount + "value"); outdated

console.log(`Hello my name is ${name} and my repo is ${repoCount}`); //modern way
const gameName = new String("haris")
console.log(gameName[0]);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(3));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-5, 3)
    console.log(anotherString);

const newString1= "    haris    "
console.log(newString1);
console.log(newString1.trim());

const url = "https://haris.com/haris%20bilal"

console.log(url);

console.log(url.replace('%20', '-'));

console.log(gameName.split('-'))