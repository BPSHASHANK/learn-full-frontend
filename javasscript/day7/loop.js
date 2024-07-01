//lets learn about the loo
//for oop

// for (var i = 0; i < 10; i++) {
//     var element = i
//     console.log(element)  
   
    

//look another examp le

// for( let i=0;i<=10;i++){
//    console.log`tables of${i}`
//     for(let j=0;j<=10;j++){
//         console.log(`${i}* ${j} =${i*j}`)  

//     }
   
// }

//lets print the table of 1
console.log("-------table-----------")
for (let i=1;i<=10;i++){
    console.log(`1*${i}=${1*i}`)

    
}

//lets declare the  array by using the for


let myArray=["shashank","vinod","ABC"]

for (let index = 0;index < myArray.length; index++) {
    const element = myArray[index];
    console.log(element)
    
}


//keywords
//if we wanna stop at pertucular moment we neeed to give break

for(i=1;i<=20;i++){
    console.log(i)
    if(i==3){
        console.log("my lucky number is 3")
        continue
    
    }

    }
