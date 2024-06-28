//let know more about the objects
//object literal we saw in object,js
//const tenderuser=new object()
const tenderuser={}
    tenderuser.id="123"
    tenderuser.name="bunny"
    tenderuser.isLoggedIn=false

console.log(tenderuser);

//multiple object in one variable

const multi={
    username:
    {
        firstname:"shashank",
        lastname:"bhat"
    }
}
console.log(multi.username)
Object.freeze(multi)
multi.firstname="shashankhhh";
console.log(multi.username.lastname)


//note when we dont have the uer name we need to use the ? 
//eg:-console.log(ulti.username?) we need to use if ifelse etc

// combining tow or more array
const ob1={
    name:"a",
    age:10
}
const ob2={
    name:"b",age:22
}
const ob3={ob1,ob2}
console.log(ob3)

//in an about retrive example it will find and give as we saw in array gung
const real=Object.assign({},ob1,ob2)
console.log(real)
//to spread ;ike in an array
const obj4={...ob1,...ob2}
console.log(obj4)


//while come from data base
//it will come in the form of array obj
const arob=[
    {
        id:1
    }
    ,
    {
        id:2
    }

]
arob[1].id

//to retrive the key value pairs
console.log(Object.keys(tenderuser));
console.log(Object.values(tenderuser));
// to check if perticular prperty is there or not
console.log(tenderuser.hasOwnProperty('name'))