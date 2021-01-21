const chunkArrayInGroups = function(arr, size){
    let arrayLocal=[]
    let arrayTotal=[]

    for (let index = 0; index < arr.length; index++) {
        console.log(arr.length)
        console.log('index',index)
        // console.log('arr[index]',arr[index])
        // arrayLocal.push(arr[index])
        // console.log('arrayLocal',arrayLocal)
        
        // if(arrayLocal.length == size || index == arr.length){
        //     arrayTotal.push(arrayLocal)
        //     arrayLocal = []
        // } 
        console('arrayTotal',arrayTotal)       
    }

    return arrayTotal

}

module.exports = chunkArrayInGroups
