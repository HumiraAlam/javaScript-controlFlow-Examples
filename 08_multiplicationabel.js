//JavaScript Program to Display the Multiplication Table

function multiplicatioTable(num){
    for (i=1; i<=10;i++){
        var newNum=num*i;
        console.log(`${num}*${i}=${newNum}`)

    }
    
    
}
multiplicatioTable(3)