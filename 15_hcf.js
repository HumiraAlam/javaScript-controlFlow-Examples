//find hcf or gcd

function hcf(num1,num2){
    let hcf;
    for(i=1;i<=num1 && i<=num2;i++){
        if(num1%i==0 && num2%i==0){
            hcf=i;
           
        
            
        }
        

    }
    console.log(hcf)




}

hcf(60,72)