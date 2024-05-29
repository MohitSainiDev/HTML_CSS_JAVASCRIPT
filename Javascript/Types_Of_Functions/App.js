function myFunction(a)  //generic fucntion
{
    console.log(a)
}

myFunction("Mohit")


//Anonymous Function

const vars=function(){
    console.log("hello")
}

vars()

//Arrow Function

// const nums= () => {
//     console.log("Arrow")
// }

//or

const nums= () =>  console.log("Arrow")


nums()

function multiply(a,b){
    return a*b
}


console.log(multiply(2,3))

const prod=(a,b)=> a*b

console.log(prod(2,5))

