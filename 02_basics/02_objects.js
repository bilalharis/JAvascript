// singleton 

//object literals
//object.create => constructor that leads to singleton

const mySym = Symbol("key1")

const jsUser = {
    name: "Haris",
    "full name": "Haris Bilal",
    [mySym]: "myKey1",
    age: 18,
    location: "Gujranwala",
    email: "haris@google.com",
    isLoggedIn: false,
    lastLogginDays: ["Monday", "Saturday"]
}

// console.log(jsUser.email);
// console.log(jsUser["email"]);
// console.log(jsUser["full name"]);
// console.log(jsUser[mySym]);

jsUser.email = "bilal@gmail.com"
// Object.freeze(jsUser)
jsUser.email = "harisbilal@google.com"

// console.log(jsUser);

jsUser.greeting = function (){
    // console.log("hello JS user");
}

jsUser.greetingtwo = function (){
    // console.log(`hello js user, ${this["full name"]}`);
}
// console.log(jsUser.greeting());
// console.log(jsUser.greetingtwo());



//singleton or constructor
//const tinderuser = new object()

const tinderUSer = {}

tinderUSer.id = "1234"
tinderUSer.name = "sammy"
tinderUSer.isLoggedIn = false

// console.log(tinderUSer);

const regularUser= {
    email: "someone@gmail.com",
    fullname: {
        userfullname: {
            firstname: "haris",
            lastname: "bilal"
        }
    }
}

// console.log(regularUser.fullname.userfullname.lastname);


const obj1 = {
    1: "a",
    2: "b"
}

const obj2 ={
    3: "c",
    4: "d"
}

const obj3 = {...obj1, ...obj2}  //for merging two or more arrays

// console.log(obj3);


const user = [
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
    {
        id: 1,
        email: "h@gmail.com"
    },
]


// console.log(user[1].email);
// console.log(tinderUSer);
// console.log(Object.keys(tinderUSer));
// console.log(Object.values(tinderUSer));


const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "haris"

}

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);

{
    "name": "haris",
    "coursename": "js in hindi",      //Json structure example
    "price": "free"
}