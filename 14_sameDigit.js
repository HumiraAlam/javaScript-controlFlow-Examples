// check if he numbers have same last digit
function isSameDigit(num1,num2,num3){
    if(num1%10 ==num2%10 && num1%10 ==num3%10){
        console.log("Same")
    
    }else{
        console.log("not same")
    }


}
isSameDigit(8,38,88)