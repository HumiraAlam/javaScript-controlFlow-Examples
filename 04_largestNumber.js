//JavaScript Program to Find the Largest Among Three Numbers

function largestNum(num1,num2,num3){
    if(num1>num2 && num1>num3){
        console.log(num1+" is the Largest Number")
    }else if (num2>num1 && num2>num3){
        console.log(num2+" is the Largest Number")

    }else if(num3>num1 && num3>num2){
        console.log(num3+" is the Largest Number") 

    }else{
        console.log( "not valid number") 

    }

}

largestNum(3,8,1)
