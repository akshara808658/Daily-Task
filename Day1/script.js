//1-without using .map(),.filter(),.reduce() 
function myMap(array,callback){
  let result = []
  for(let i =0; i<array.length;i++){
   result.push(callback(array[i],i,array))
  }
  return result;
}
let numbers = [1,2,3,4,5]
console.log(myMap(numbers, n=>n*2))