let a = 300

if(true){
   let a = 10
   let b = 30          //local scope variables can acceess golbal scope variables but global cannot access local
//    console.log(a);
}

// console.log(a);

function one () {
    const username = "haris"

    function two (){

        const website = "youtube"

        // console.log(username);
        
    }

    // console.log(website); //not print due to no access of local scope to global scope
    
    two()
}
one()


if(true){
    const username = "bilal"
    if(true){
        const website = " google"
        // console.log(username + website);
    }
    // console.log(website); //will not pint because its out of local scope and variable is in local scope
}

// console.log(username);  //will not print because it is out of the scope 
    

first()
function first(){
    console.log("first function");
}


second()    // error we cannot access this type of expression function by accessing it before initialization
const second = function(){
        console.log("second function");
}
