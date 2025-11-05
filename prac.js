//2635. Apply Transform Over Each Element in Array
var map = function(arr, fn) {
    const res = []
    for(let i in arr){
        res.push(fn(Number(arr[i]), Number(i)))
    }
    return res
    
};
/*So here we recreate the .map() function by iterating 
through array and apply the passed in function to each element in array,
so it acts on each element like the map function does. Must type cast i
as numbers due to how "in" for loop acts on arrays. (considers each element strings?)
Could just use normal for loop to get around this.*/


//2634. Filter Elements from Array
var filter = function(arr, fn) {
    const res = []
    for(let i = 0; i < arr.length; i++){
        if(fn(arr[i], i)){
            res.push(arr[i])
        }
        
    }
    return res
};
/*Similar concept, we iterate through each element, check if it
returns true according to whatever definition set in the given function
and push to new array. Used normal for loop to show no type casting needed.*/


//2626. Array Reduce Transformation
var reduce = function(nums, fn, init) {
    
    for(let i = 0; i < nums.length; i++){
       init = (fn(init, nums[i]))

    }
    return init
};
/*Iterate through array, using init as accumulator, each output of function is 
set to init so the value is saved and updated with each loop.*/

//2629. Function Composition
var compose = function(functions) {
    
    return function(x) {
        for(let i = functions.length-1; i >= 0; i--){
            x = functions[i](x)
        }
        return x
    }
      
    /*const fn = (acc, f) => f(acc)
    return function(x){
         return functions.reduceRight(fn, x)
    }*/
};
/*Must recreate the idea of calling a function within a function, using the inner function's output 
as the outer function's input. So we iterate through the array in reverse, then call the function
with the given input and reinitialize x as that input for the next function in the array. Not too
difficult to get but alternate solution that is commented is a bit harder to understand. Uses
reduceRight() function.*/
