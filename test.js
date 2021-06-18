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
