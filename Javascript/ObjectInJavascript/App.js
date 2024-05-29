let myData=[
    
    {
        first_name:"mohit",
        second_name:"saini",
        age:26,
        fullName:function(){
            return this.first_name+this.second_name
        }
    },
    {
        first_name:"nidhi",
        second_name:"saini",
        age:29,
        fullName:function(){
            return this.first_name+this.second_name
        }
    }


]
// myData[0].second_name="kumar"
// console.log(myData[0].fullName())

// myData.forEach((element ,index)=> {
//     console.log(index+":"+element.first_name)
// });

// for(var i=0;i<myData.length;i++)
//     {
//         console.log(myData[i].first_name)
//     }

let listHolder=document.querySelector("#listholder")

function render(){
myData.forEach((element,index) => {
    let tr=document.createElement("tr")
    tr.innerHTML=   `
                <td>${index+1}</td>
                <td>${element.first_name}</td>
                 <td>${element.second_name}</td>
                <td>${element.age}</td>
                <td>${element.fullName()}</td>
                `
                listHolder.appendChild(tr)

});
}
render()

let btn=document.querySelector("#btn")
let firstname=document.querySelector("#first")
let lastname=document.querySelector("#last")
let age=document.querySelector("#Age")


btn.addEventListener('click',function(){
    if(firstname.value.trim()=="" ||lastname.value.trim()==""||age.value.trim()=="")
        {
            alert("Enter data")
        }

        else{
            let copyData=[...myData]

            let newEntry={
                first_name:firstname.value.trim(),
                second_name:lastname.value.trim(),
                age:age.value.trim(),
                fullName:function(){
                    return this.first_name+this.second_name
                }
            }

            copyData.push(newEntry)
           myData.splice(0,myData.length,...copyData)
           console.log(myData)
        }
        listHolder.innerHTML=""
        render()
        firstname.value=""
        lastname.value=""
        age.value=""
    })


