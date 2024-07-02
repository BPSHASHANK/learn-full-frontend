const numder=[1,2,3]
const result=numder.reduce(function(acc,curval){
    console.log(`acc${acc}current ${curval}`)
    return acc+curval
},0)


const resul=numder.reduce((acc,curr)=>acc+curr,0)
console.log(resul)