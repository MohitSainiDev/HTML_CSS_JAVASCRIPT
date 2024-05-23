// let my_textbox = document.querySelector("#my_textbox")
// document.querySelector("#my_title").innerHTML="my_Website"

let title=document.querySelector("#my_title")
title.innerHTML="my_Website"
title.style.color="red"

let names=document.querySelector("#my_textbox")

let btn1=document.querySelector("#myBtn")

btn1.addEventListener('click',function()
{
    title.innerHTML=names.value
})