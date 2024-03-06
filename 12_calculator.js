function calculator(num1,num2,action){
    switch(action){
        case "+":
            return num1+num2;
            break;
        case "-":
            return num1-num2;
            break;
        
        case "*":
            return num1*num2;
            break;
        case "/":
            return num1/num2;
            break; 
    
    }

}
console.log(calculator(8,2,"+"))