//Functions

function addTwoNumbers (num1, num2){
    return (num1 + num2)
}

const result = addTwoNumbers(4,7)
// console.log("result: ", result);

function loginUSerMessage(username = "sam"){
    if(!username){
        // console.log("please enter  a username");
        return
    }
    return `${username} just logged in`

}
// console.log(loginUSerMessage());

function calculateCartPrice (...num1) {
        return num1
}

console.log(calculateCartPrice(100,200,300,400));


const user = {
    name: "haris",
    price: 99
}

function handleObject(anyobject){
        console.log(`username is ${anyobject.name} and price is ${anyobject.price}`);
}

handleObject(user)

const newArray = [200, 400, 100, 600]

function returnSecondVAlue (getarray){
     return getarray[1]
}

console.log(returnSecondVAlue(newArray));