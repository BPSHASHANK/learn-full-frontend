//scopes
//why we have to use the let insted of var in many times
//because let seebelow example
let c=35
if(true){let a=10
    const b=20
   let c=30
console.log("inner",c)
}

console.log(c)



   
//nested scope
function one(){
    const username="shashank"
    function two(){
        const site="youtube"
        console.log(site) 
        console.log(username)
    }
   
    console.log(username)
    two()
}
one()


//lets try in an if statement
if(true){
    const username="shashank"
    if(username==="shashank")
        {
            const web="youtube"
            console.log(username+web)
        }
 console.log(username)
 //we cant  access the website   
}
console.log(first(3))
function first(num){
     return num+1
}


//another method
const second=function(num1){
    return num1*7
}
console.log(second(2))




//acceablity 


