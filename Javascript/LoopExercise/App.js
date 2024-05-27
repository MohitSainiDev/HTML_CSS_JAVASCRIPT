let mylist=document.querySelector("#list");

for(let i=1;i<=100;i++)
    {
        let mynewlist=document.createElement("li");
        if(i%3==0 && i%5==0)
            {
            mynewlist.innerHTML="FizzBUzz";
            mylist.appendChild(mynewlist)

            }

        else if(i%3==0)
        {

            mynewlist.innerHTML="Fizz";
            mylist.appendChild(mynewlist)

        }
        else if(i%5==0)
            {
                mynewlist.innerHTML="Buzz";
            mylist.appendChild(mynewlist)
            }
            else{
                mynewlist.innerHTML=i;
                mylist.appendChild(mynewlist)
            }
    }