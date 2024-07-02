//map is similar to the object but here we are no simlar element to be added in the map
const map = new Map();
map.set("IN", "india");
map.set("USA", "UNIED STATES OF AMERICA");
console.log(map);

//loop
//for loop

for (let i = 0; i <= 10; i++) {
  const element = i;
  console.log(`1*${i}=${1 * i}`);
}

//do while loop
//in do while loop it will do executes first
let i = 10;
do {
  i = i + 1;
  console.log("equal to 10");
} while (i <= 10);

//lets know about for each loop
const array = ["java", "python", "c+", "javascript"];
array.forEach(function (val) {
  console.log(val);
});

// /lets try n Object
// const ob={
//     name:"shashank",
//     age:20
// }

// ob.forEach(function (val1){
//     console.log(val1);
// }
// )

//by using arrow function
let x = (val1, val2) => {
  return val1 + val2;
};
console.log(x(2, 4));

//mentioned above is basic arrow function
//lets declare by using the foreach
let d = ["ram", "seetha", "bharatha"];
console.log("arrow foreach");
d.forEach((d) => {
  console.log(d);
});
//lets c by using the inside array pass the object
let arr = [
  {
    planguage: "java",
    extenction: "java",
  },
  {
    planguage: "javascript",
    extenction: "js",
  },
  {
    planguage: "python",
    extenction: "py",
  },
];
arr.forEach( (item)=>{
    console.log(item.planguage)
    console.log(item.extenction)
    console.log(item.extenction,item.planguage)
})

