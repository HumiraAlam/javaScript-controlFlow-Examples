/*JavaScript Program to Solve Quadratic Equation
To find the roots of such equation, we use the formula,

(root1,root2) = (-b ± √b2-4ac)/2a

(b2-4ac) is known as the discriminant 



*/

var root1, root2 ;
function quadratic(a,b,c){
    let discriminant= b*b-4*a*c;
    if(discriminant>0){
        root1= (-b+ Math.sqrt(discriminant))/(2*a);
        root2= (-b- Math.sqrt(discriminant))/(2*a);

        console.log (`The roots of quadratic equation are ${root1} and ${root2}`);
    }else if (discriminant==0){
        root1=root2= -b/(2*a);
        console.log (`The roots of quadratic equation are ${root1} and ${root2}`);

    }
    else {
        let realPart = (-b / (2 * a)).toFixed(2);
        let imagPart = (Math.sqrt(-discriminant) / (2 * a)).toFixed(2);
    
        // result
        console.log(`The roots of quadratic equation are ${realPart} + ${imagPart}i and ${realPart} - ${imagPart}i`);
    }

}
quadratic(1,-6,9);
