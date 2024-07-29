//Arrays

const myArr = [1,2,3,4,5]
const myArr2 = ["haris", "bilal","ahmad","ali"]
// console.log(myArr2);
// console.log(myArr[0]);

//Arrays_Methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()
// myArr.unshift(9)
// myArr.shift()
// console.log(myArr.indexOf(3));
// console.log(myArr.includes(8));

// const newArr = myArr.join()
// console.log(typeof newArr);
// console.log(newArr);
// console.log(myArr);
// console.log("A ", myArr);
// console.log(myArr.slice(1,3));
// console.log("B ", myArr);
// console.log(myArr.splice(1,3));
// console.log("C ", myArr);



const hero1 =["babar", "rizwan", "fakhar"]
const hero2 =["haris", "haider", "saim"]

// hero1.push(hero2)

// console.log(hero1);

// const all_heroes = hero1.concat(hero2)
// console.log(all_heroes);

const all_heroes = [...hero1, ...hero2] 

//mostly used spread operator and concat is also good but less used by developers

// console.log(all_heroes);

const new_array = [1, 2, 3, [4, 5, 6], 7,[6, 7, [4, 5]]]

const useable_new_array = new_array.flat(Infinity)   //arrange every sub array in one array .flat

// console.log(useable_new_array);

console.log(Array.isArray("Haris"));
console.log(Array.from("Haris"));
console.log(Array.from({name: "Haris"})); 
//interesting we should have to tell we want to make array of keys or values


const score1 = 100
const score2 = 200
const score3 = 300

console.log(Array.of(score1, score2,score3));