
//JavaScript Program to Check Prime Number

function primeNum(givennNum){


    for(checkNum=2; checkNum<givennNum; checkNum++){
        if(givennNum%checkNum==0){
            return "Not Prime Number";
                    
        } return "Prime Number";
    
        }
           
    }    

console.log(primeNum(7)) //bugg: for 9 it does not work