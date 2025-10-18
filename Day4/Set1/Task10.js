//10. Write a program that checks if a given string is a valid email address.
function isValid(str){
  return str.includes('.com') && str.includes('@')
}
console.log(isValid('test@example.com'))
console.log(isValid('invalid.email.com'))
console.log(isValid('user@domain'))