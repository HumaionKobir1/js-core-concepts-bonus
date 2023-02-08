// let factorial = 1;
// for (let i = 5; i >= 1; i--){
//     factorial = factorial * i;
// }
// console.log(factorial);



// If the same function is called again from within a function, it is called a recursion

function factorial (i){
    if(i == 1){
        return 1;
    }
    return i * factorial(i - 1);
}
const result = factorial(5);
console.log(result);