let myTextBox=document.querySelector("#myTextBox")
let buttons=document.querySelector("#btn1")
let list=document.querySelector("#list")

buttons.addEventListener('click',function()
{
   let text=myTextBox.value;
    if(text.trim()=="")
        alert("Please enter the data")
    else{
    let new_element=document.createElement("li")
    new_element.innerHTML=myTextBox.value.toUpperCase()
    list.appendChild(new_element)
    }
})