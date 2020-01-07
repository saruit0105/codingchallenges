function minMax(arr){
   let newArr = []
 let sorted = arr.sort((a,b) => a > b? 1: -1)
 let maxNum = sorted.length
newArr.push(sorted[0], sorted[maxNum-1])
return newArr
}