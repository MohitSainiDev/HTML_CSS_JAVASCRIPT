let title=document.querySelector("#title")
let btn1=document.querySelector("#btn1")
let btn2=document.querySelector("#btn2")
let btn3=document.querySelector("#btn3")
let defautbtn=document.querySelector("#default")

btn1.addEventListener('click',function()
{
    title.innerHTML="btn1 is clicked"
})
btn2.addEventListener('click',function()
{
    title.innerHTML="btn2 is clicked"
})
btn3.addEventListener('click',function()
{
    title.innerHTML="btn3 is clicked"
})
defautbtn.addEventListener('click',function()
{
    title.innerHTML="WELCOME TO THIS PAGE"
})