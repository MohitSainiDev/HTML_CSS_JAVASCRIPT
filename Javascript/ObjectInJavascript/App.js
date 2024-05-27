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
myData[0].second_name="kumar"
console.log(myData[0].fullName())

