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
