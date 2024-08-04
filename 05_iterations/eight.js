// reducer


const myNums = [1, 2, 3, 4]

const newNums = myNums.reduce( (acc, currval) => {
    //console.log(`acc: ${acc} and currvl: ${currval}`);
    
    return acc + currval
}, 0)

// console.log(newNums);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const cart = shoppingCart.reduce( (acc, item) => {
    return acc + item.price
}, 0)

console.log(cart);
