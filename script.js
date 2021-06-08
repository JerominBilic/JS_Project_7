/*Add a simple function inside a script tag which sums the numbers between 1 and 100 inclusive.
Print the sum using the log method.*/

function sum(){
    var total = 0;
    for (var x = 0; x<=100; x++){
        total += x;
    }
    document.write(total);
}