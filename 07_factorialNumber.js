//JavaScript Program to Find the Factorial of a Number
// 4=5 4*3*2*1  4-3
//num*i

function factorialNumber(num){
    for(i=num-1; i>0 ;i--){
        num*= i;
    }
    console.log(num)
}
factorialNumber(5)