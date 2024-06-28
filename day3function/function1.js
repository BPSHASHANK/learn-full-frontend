function shashank(){
    console.log("one type of function")
}
shashank()

// arrow fonction
//function for add 2 number

function twonum(num1,num2){
    console.log(num1+num2)
}
twonum(434,4)
twonum(434,'a')
//how to store the result in an function

// const result=function(num1,num2){
//     console.log(num1+num2)
// }
// console.log("result of num:-",result(23,34))

const sumof2=function(num1,num2){
    let result=num1+num2
    return result
}
const result=sumof2(34,34)
console.log("result",result)


//lets crete small user login function
function log(username){
    return `${username}you are just logged`
}
console.log(log("shashank"))
//if we not passing any parameter we need to use if else condition
//console.log(log(" ")) op:undefined



function log(username){
    if(username==undefined){
        // if(!username)this also same
        console.log("please enter name")
        return
    }
    return `${username}you are just logged`
}
console.log(log("shashank "))

//if we pass multy parameter to store all
function CalculateCart(num1){
    return num1
}
console.log(CalculateCart(122,343,454))
//op:-122 only
function CalculateCart1(...num1){
    return num1
}
console.log(CalculateCart1(122,343,454))
//op:-[122,343,454]

//another case
function Cart(val1,val2,...num1){
return num1
}
console.log("outputis",Cart(100,2333,245,3432423))
//op:-245,34322423

//lets know about object0s
//two method let c one by one

let user={
    name:"shashank",
    age:21

}
function objectFunction(anyfunction){
    console.log`MY NAME IS ${anyfunction.name}and my age is ${anyfunction.age}`
}
console.log(objectFunction(user))


//another type to extract the datas


let anotherMethod={
    name:"bheeem",
    age:22
}
function n(any){
    console.log`myname is ${any.name} and my age is${any.age}`
}
console.log(n(anotherMethod))


//next know in an array

let Myarray=[736,63,43]
function a(getarry){
    return getarry[2]

}
console.log(a(Myarray))