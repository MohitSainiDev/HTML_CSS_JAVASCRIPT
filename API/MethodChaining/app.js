function displayString(str){
    console.log(str)

    return{
        name:"Mohit",
        age:26,
        displayNumber:function(num){
            console.log(num)
            return{
                displaySymbols:function(sym){
                    console.log(sym)
                }
            }

        }
    }
}


displayString("Hello World!").displayNumber(5).displaySymbols(23)