//Javascript Program to Check if a Number is Odd or Even

function evenOdd(num){
    if(num%2==0){
        console.log(num+" is Even Number")
    }else if (num%2!==0){
        console.log(num+" is Odd Number")

    }else if(num===0){
        console.log(num+" is Zero") //bugg: even if i give zero it says even number

    }else{
        console.log( "not valid number") // //bugg: even if i give nothing it says undefined number

    }

}

evenOdd()