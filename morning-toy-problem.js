
function compare(arr1, arr2){
    // let answer = 0
    for(let i =0; i < arr1.length; i++){
        if( arr1[i] !== arr2[i]){
            return arr1[i];
        }
    }
}

console.log(compare([1,2,3,4],[1,2,4]));
