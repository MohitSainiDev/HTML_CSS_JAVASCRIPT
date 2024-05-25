let displayArea = document.querySelector("#displayArea");
let inputBox = document.querySelector("#inputBox");
let myBtn = document.querySelector("#myBtn");


let languages=["c","c++","java"]


for(let language of languages )
    {
        let li=document.createElement("li")
        li.innerHTML=language;
        displayArea.append(li);
    }

myBtn.addEventListener("click", function () {
  
  let new_language=inputBox.value
//   languages.push(new_language)
  let li=document.createElement("li")
        li.innerHTML=new_language;
        displayArea.append(li);

})