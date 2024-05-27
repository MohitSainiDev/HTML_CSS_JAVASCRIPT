function greetings(typefoGreeting){
  alert(typefoGreeting)
}

function addtwonumbers(a,b)
{
   return a+b
}

function multiplyNumbers(...args){

    let num=1;

    for(let n of args)
        num=num*n;

    return num;
}
console.log(multiplyNumbers(2,3,4,5))


let btn1=document.querySelector(".btn1")
let btn2=document.querySelector(".btn2")

btn1.addEventListener('click',function()
{
    greetings("good afternoon")
})
btn2.addEventListener('click',function()
{
    alert(addtwonumbers(5,6))
})


let fruits=["banana","apple","pear"]
let numbers=[1,2,3]

let combinedarray=[...fruits,...numbers]
console.log(combinedarray)

