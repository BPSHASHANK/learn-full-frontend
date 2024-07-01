/// while declaring a string "username" it will consider autometically true
//if in case ""


const username="shashank"
if(username){
    console.log("Got user name")
}else{
    console.log("Don't have user name")
}

/// lets look in to another  "" it will considr as false

const user=""
if(user){
    console.log("your user")
}else{
    console.log("your not a user")
}

//to check with array we nned to use length property
if(user.length===0){
    console.log("array is empty")
}

if(Object.keys(user).length===0){
    console.log("arry in object")
}else{
    console.log("false")
}
 //?? used for not considr while time of backend
 //example
 const va1=null ?? 10
 console.log(va1)
 const val2=10??12
 const val3=10??13??14
 console.log(val3)


 //ternary operator


  const temp=50
  temp <50 ? console.log("sunny morning"):console.log("very hot")