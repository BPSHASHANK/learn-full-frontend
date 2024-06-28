//objects and events is very important in an js

let obj={
name:"shashank"
}
//two type we can declre single ton object litral


//single ton
const single={
    name:"shashank",
    age:20
}

// we can accessa objects in 2 menthods
//.meyhod
//['']method
console.log(single.name)
console.log(single["name"])
//if wanted to add symbol to the object there will be one form
const mysym=Symbol("shashank")
const eg={
    name:"bheem",
    age:23,
    email:"bhemeem2gmail.com",
    [mysym]:"shashank"
}
console.log(eg[mysym])
//if we wanna change something in an object we van change by
eg.email="bheem13@gmail.com";
console.log(eg)
//there will be freeze method if we use that we cant change any data
//Object.freeze(eg)
 

eg.greet=function(){
    console.log(`greething from shashank,${this.name}`)

}

console.log(eg.greet());
eg.new=function(){
    console.log(`learn new thimg ${this.name}`)
}
console.log(eg.new())