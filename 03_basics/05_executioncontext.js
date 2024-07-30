


// When a javascript code runs it execute in two steps first one is global execution context and the 
//second one is functional execution context there is also third one but most of the time that is not used but that is eval execution context

//program runs in two phase first is memory creation phase(only locate place) and the second isexecution phase(do execution) 

let val1 = 30
let val2 = 20

function addnum (num1, num2){
    let total = num1 + num2
    return total
}

let result1 = addnum(val1, val2)
let result2 = addnum(10, 5)

// in the above function what will happen

// 1. global execution that is stored in (this)
// 2. memory creation phase (collected variable placed only)
// what will happen in memory creation phase ...... vali1 = undefined and val2 =undefined.... addnum = function definition....... result1 = undefined  and result2 = undefined...... than comes
// 3. execution phase 
// val1 = 30 and val2 = 20 ....... when we come to result1 it will refer to addnum function and when we use this function in execution context it will again make a new executional context that includes again new variable environment plus execution thread aand again memory execution and execution phase happens

//result1
//for addnum of result1 ...... memory phase=== val1 = undefined and val2 = undefined and total = undefined 
//for addnum of result1...... execution context === num1 =30  and num2 = 20 and total = 50 znd return of  total is executed in parent mean global execution now result1 is 50  
//*****importan******/
// after execution the new executional context is deleted


//result2
//for addnum of result2 ...... again memory phase===== val1 undefined, val2= undefined and total = undefined 
// for addnum of result2...... again execution phase num1 = 10 and num2 = 5 and total = 15 and again return of total is executed in parent mean global wxecution and now result2 is 15
//*******again importan*******/
// after execution the executional cntext is deleted





//   CALL STACK
// in this again global execution conmtext is made and after taht ehen we call a function it will go in stack and after execution it will move from stack
// and when we have a function in function means nested functions than what happens let suppose we have a function one and funtion two in that function and than again function three in that function its nested than function one will come in stack and that will be in stack and we call function two and now there are two funcctions in the stack and than we call function three and now there are three functions in the stack now the point is this that whic one function is firstlyremovedd from the stack in this the LIFO process is foloowed means the last come first out its mean the third function will first move away and than the second function and than the first function