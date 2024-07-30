// immediately invoked function (IIFE)

(function one (){
    //named iife
    console.log(`Hello`);
})();

((name) => {
    //simple iife
    console.log(`hello ${name}`);
})("haris")