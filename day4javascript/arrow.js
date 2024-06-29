//how towork with arrow 
const user={
    name:"shashank",
    password:"shashank",
    welcome:function(){
        console.log(`hii${this.name} and your password is ${this.password}`)
        console.log(this)


    }
    
}
// user.welcome()
// user.name="shashankbhat"
// user.welcome()
console.log(this)


//recap
let userform={
    username:"bpshashank",
    userage:23,
    email:"shashankcoorg",
    message:function(){
        console.log(`hii ${this.username} your age is ${this.userage} and email is ${this.email}`)

    }
}
console.log(userform.message())

///lets understand arrow function


let c=(num1,num2)=>{

    return num1+num2
}
console.log(c(7,1))


//normal function
// function sum(num1,mum2){
//     return num1+mum2
// }
// console.log(sum(2,3))


//implicit type of expression
const eg=(n1,n2 )=>(n1+n2) 
console.log(eg(2,4))

//or
const eg2=(n1,n2 )=>n1+n2
console.log(eg2(2,4))

//to pass objects

const myob=()=>({username:"shashank",age:"20"})
console.log(myob(3,1))