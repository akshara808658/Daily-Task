//9. Write a program that checks if a given string is a valid email address.
// function isValidEmail(str){
//   let emailFormat = ['@','.','com']
//   let letters = str.split(' ')
//   for(let i=0; i< letters.length; i++){

//   }
//   return false
// }
// function isValidEmail(str){
//   let email = ['@','.','com']
//   let letters = str.split(' ')
//   for(let i=0; i< letters.length; i++){
//     if(letters[i].every(el => el.includes(email[i]))){
//       return true
//     }
//   }
//   return false
// }
function isValidEmail(str){
    return str.includes('@') && str.includes('.com')
}
console.log(isValidEmail('test@example.com'))
console.log(isValidEmail('invalid.email.com'))
console.log(isValidEmail('user@domain'))