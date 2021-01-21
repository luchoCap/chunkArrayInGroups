const chunkArrayInGroups = function(arr, size){
    acumulatorSize= 0
    arrayLocal=[]
    arrayTotal=[]

    for (let index = 0; index < arr.length; index++) {

        arrayLocal.push(arr[index])
        console.log('arrayLocal',arrayLocal)
        acumulatorSize++
        if(acumulatorSize == size || index == arr.length){
            arrayTotal.push(arrayLocal)
            arrayLocal = []
        } 
        console('arrayTotal',arrayTotal)       
    }

}

module.exports = chunkArrayInGroups
