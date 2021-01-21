const chunkArrayInGroups = function(arr, size){
    let arrayLocal=[]
    let arrayTotal=[]

    for (let index = 0; index < arr.length; index++) {
        arrayLocal.push(arr[index])       
        if(arrayLocal.length == size || index == arr.length-1){
            arrayTotal.push(arrayLocal)
            arrayLocal = []
        }        
    }

    return arrayTotal
}

module.exports = chunkArrayInGroups
