// for each loop     mostly used


const coding = ["java", "c++", "react", "angular", "python"]

// coding.forEach((item)=>{
//         console.log(item);
        
// })

// coding.forEach( (item, index, arr) => {
//     console.log(item, index, arr);
    
// } )

const myCoding =[
    {
        languageName: "javascript",
        languageFileName: "js"

    },
    {
        languageName: "java",
        languageFileName: "java"

    },
    {
        languageName: "python",
        languageFileName: "py"

    },
]


myCoding.forEach( (item) => {
    console.log(item.languageFileName);
    
} )