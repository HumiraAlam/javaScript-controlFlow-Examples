//find LCM

function LCM(num1, num2){
    let hcf;
    for(i=1;i<=num1 && i<=num2;i++){
        if(num1%i==0 && num2%i==0 ){
            hcf=i;
            

        }
    }
    let lcm=(num1*num2)/hcf;
    console.log(lcm);


}
LCM(6, 8)