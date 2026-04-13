// 2. design a function which can take any no of arguments and return the sum
function sum(...args){
    return args.reduce((acc, curr)=> acc+curr, 0);
}
sum(1, 10, 15, 20, 25, 30);

// The reduce() method executes a reducer function for array element.
// The reduce() method returns a single value: the function's accumulated result.

