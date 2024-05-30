// let para=document.querySelector(".container")
let robotContainer=document.querySelector(".robotContainer")

for(let i=1;i<=10;i++)
    {
fetch(`https://robohash.org/${i}`)
.then((robotPicture)=>{
    let img=document.createElement("img")
    img.src=robotPicture.url
    robotContainer.appendChild(img)
    

}).catch((error)=>{
    console.error("Failed to get data",error)
})

    }