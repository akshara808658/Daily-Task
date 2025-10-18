//2. Get All Permutations of a String. A permutation of a string is a rearrangement of its characters in all possible ways, where every character is used exactly once in each arrangement.
function permutation(str){
 let result = []
 let leng = str.length
 for(let i=0; i< str.length; i++){
  let row = ''
  for(let j=0; j <=i; i++){
    row += str[i] 
  }
 }
 return result
}
console.log(permutation('abc'))