let firstname=document.querySelector("#Firstname")
let lastname=document.querySelector("#LastName")
let buttons=document.querySelector("#btn1")
let tbody=document.querySelector("#tbody")

buttons.addEventListener("click",function()
{

    if(firstname.value.trim()=="" || lastname.value.trim()=="")
        {
        alert("enter data first")
        }
    else{
        let new_row=document.createElement("tr")
    let new_firstname=document.createElement("td")
    let new_lastname=document.createElement("td")
    new_firstname.innerHTML=firstname.value
    new_lastname.innerHTML=lastname.value

  
    new_row.appendChild(new_firstname)
    new_row.appendChild(new_lastname)

    tbody.appendChild(new_row)

    firstname.value="";
    lastname.value="";


    }
    

})