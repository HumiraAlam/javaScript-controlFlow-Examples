
//JavaScript Program to Print All Prime Numbers in an Interval

function primeNumber(num1, num2){
    firstloop:for (i=num1; i<=num2; i++){
        for(j=2; j<i;j++){
            if(i%j==0){
                continue firstloop ;
            }
        
            
        }
        console.log(i)
    }
    
}
primeNumber(2, 12);