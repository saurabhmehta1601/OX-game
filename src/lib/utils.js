export const evaluateWinner = ( currentPlayerCells) =>{
    if(includeSubarray(currentPlayerCells,[1,2,3]) || includeSubarray(currentPlayerCells,[4,5,6]) ||includeSubarray(currentPlayerCells,[7,8,9]) || includeSubarray(currentPlayerCells,[1,4,7]) || includeSubarray(currentPlayerCells,[2,5,8]) || includeSubarray(currentPlayerCells,[3,6,9]) || includeSubarray(currentPlayerCells,[1,5,9]) || includeSubarray(currentPlayerCells,[3,5,7])){
        return true
    }else{
        return false
    } 

}


// nlogn
let includeSubarray = (biggerArray,smallerArray) => {
    biggerArray.sort()
    smallerArray.sort()
    let i=0,j=0 
    let count = 0
    while( i < biggerArray.length && j < smallerArray.length){
        if(biggerArray[i] == smallerArray[j]){
            i++
            j++
            count++
        }else if(biggerArray[i]  > biggerArray[j]) {
            j++
        }else{
            i++
        }
    }

    // all items found
    return count == smallerArray.length
}
