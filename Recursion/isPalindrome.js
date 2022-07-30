function isPalindrome(str){
    if (str.length === 1) {
        return true;
    }
    if (str.length == 2) {
        return str[0] === str[1];
    }
    if (str[0] === str[str.length-1]) {
        return isPalindrome(str.slice(1,str.length-1))
    }
    return false;
}
  
let output = isPalindrome('awesome') // false
console.log(output)
output = isPalindrome('foobar') // false
console.log(output)
output = isPalindrome('tacocat') // true
console.log(output)
output = isPalindrome('amanaplanacanalpanama') // true
console.log(output)
output = isPalindrome('amanaplanacanalpandemonium') // false
console.log(output)