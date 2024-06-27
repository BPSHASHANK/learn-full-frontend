//important in every language


//note it will be in mili seconds it will help us to compare
let my=new Date()
console.log(my.toString());
console.log(my.toUTCString());
console.log(my.toJSON())
//console.log(my.toLocaleDateString());

console.log(typeof my)
//note in js te date will start from 0 example


let age=new Date(2023,2,13)
console.log(age.toString())

//to convert ino mili sec it is some time if we working with live hotel room etc time mili sec is very important to compare
console.log(age.getTime())
console.log(Date.now())
// if we wanna get perticular time with previous and todays 
console.log(Math.floor(Date.now()/1000))
console.log(age.getDate())
console.log(age.getTime())
console.log(age.getDay())


//by using string interpolation method to find date,time ,etc
console.log`${age.getDate()}and ${age.getTime()}`


new Date.toLocalString('defualt',{
    weekday:"long"
})

let age1=new Date(2023/13/2)
console.log(age1.toJSON)