//JavaScript Program to Print the Fibonacci Sequence

/*
First terms of the series is:                           0
Second term of the series is:                           1
Third terms of the series is:                   (0 + 1) = 1
Fourth terms of the series is:(second + third)= (1 + 1) = 2
Fifth term of the series is: (Third + fourth) = 1 + 2 = 3
sisth term of the series is: (fourth + fifth) = 2 + 3 = 5
*/
function fibonacciSequence(num){
    let n1=0, n2=1;
    for(i=1;i<=num;i++){
        console.log(n1);
        nestTerm= n1+n2;
        n1=n2;
        n2=nestTerm;
    }
}

fibonacciSequence(5)