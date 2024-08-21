const promiseOne = new Promise(function(resolve, reject){
    setTimeout(() => {
        console.log("function run");
        resolve()
        
    }, 1000);
})

promiseOne.then(function(){
    console.log("promise resolved");
    
})

new Promise(function(resolve, reject){
    setTimeout(function(){
        console.log("function run 2");
        resolve()
    }, 1000)
}).then(function(){
    console.log("promise resolved 2");
    
})

const promiseThree = new Promise(function(resolve, reject){
    setTimeout(function(){
        resolve({name: "haris", email: "haris@gmail.com"})
    }, 1000)
})

promiseThree.then(function(user){
    console.log(user);
    
})

const promiseFour = new Promise(function(resolve, reject){
    setTimeout(() => {
        let error = false;
        if (!error) {
        resolve({username: "bilal", email: "bilal@gmail.com"})
        } else{
            reject("ERROR: something went wrong!")
        }
    }, 1000);
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then(function(username){
        console.log(username);    
}).catch(function(error){
    console.log(error);   
}).finally(()=> console.log("promise is either resolved or rejected")
)



const promiseFive = new Promise(function(resolve, reject){
    setTimeout(function(){
        let error = false;
        if (!error) {
            resolve({name: "javascript", pass: "1234"})
        } else{
            reject("ERROR: something went wrong")
        }
    }, 1000)
})

async function consumePromiseFive(){
    try {
        const response = await promiseFive
        console.log(response);
        
    } catch (error) {
        console.log(error);
        
    }
}


consumePromiseFive()


// async function getAllUsers(){
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')

//         const data = await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E: ", error);
//     }
// }

// getAllUsers()

fetch('https://api.github.com/users/bilalharis')
.then((response) => {
    return response.json()
    
}).then((data) => {
    console.log(data);
    
})
.catch((error) => {
    console.log(error);
    
})