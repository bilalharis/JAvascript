// for of

let arr = [1,2,3,4,5]

for (const num of arr) {
    // console.log(`thee numers are: ${num}`);
    
}

const greetings = "hello world!"

for (const greet of greetings) {
    if (greet == " ") {
        continue
    }
    // console.log(`each char is: ${greet}`);
    
}

const map = new Map()
map.set('pk', 'Pakistan')
map.set('In', 'India')
map.set('Fr', 'France')

for (const [key, value] of map) {
    console.log(key, ":-", value);
    
}

