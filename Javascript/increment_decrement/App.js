let numberBox=document.querySelector("#numberbox")
const my_minus=document.querySelector("#minus")
const my_plus=document.querySelector("#plus")
const reset=document.querySelector("#reset")


my_plus.addEventListener('click',function()
{
    let val=numberBox.value
    val++
    numberBox.value=val
})

my_minus.addEventListener('click',()=> //arrow function
{
    let val=numberBox.value
    val--
    numberBox.value=val
})

reset.addEventListener('click',()=>
    {
        let val=numberBox.value
       val=0
       numberBox.value=0
    })