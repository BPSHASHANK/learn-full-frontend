//in memory there will be teo type 1,sack 2,heap
//stack were used in primitive data type here we will get copy
//heap non primitive here we will get reference
//eg
let name="shashank"
let anothername=name;
console.log(anothername)
anothername="bhatshashank"
console.log(name)
console.log(anothername)

//let us know in non primitive type

let userone={
    name:"shashank",
    age:23
}
usertwo=userone
console.log(usertwo)
//see now if we cahnge in an object the reference will change

usertwo.name="shashankbhat"
console.log(userone)
console.log(userone.name);
console.log(usertwo.name)