const user = {
    name: "haris",
    price: 999,

    welcomemessage: function (){
        console.log(`${this.name}, welcome to website`);
    }

}

// user.welcomemessage()
// user.name = "bilal"
// user.welcomemessage()

//Arrow functions

// const nav = (num1, num2) => {
//     return num1 + num2
// }

const nav = (num1, num2) => (num1 + num2)
console.log(nav(4, 7));