//lets understand the execution contacts
//call stack


//we need to know about
//global execution
//function execution


//there mainly two faces
//memory and execution face
let num1=10
let num2=20
function add(numd1,numd2){
    let total=numd1+numd2
    return total
    
}
let result1=add(num1,num2)
let result2=add(10,35)
//global exceptionface
//this
//memory phase
//num1=undefined
//num2=undefined
//add:-defination
//total:-undefined
//result1:-undefined
//result2:-undefined

//lets know about execution face
//num1=10
//num2=10
//total=num1+num2
