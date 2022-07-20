//takes in two strings. 첫번째 인자가 두번째인자의 subsequence 인지
//즉, 첫번째 문자열이 두번째 문자열에 순서도 똑같이 나타나는지?
//Time complexity - O(N+M)
//Space complexity - O(1)

//str2 다 확인하는 동안 str2의 요소와 str1의 요소가 같으면? str1의 index 증가시키기
//str1의 인덱스가 str1의 길이와 같으면? str1의 모든 요소가 str2에 포함이 되어있었다는 거니까.. true
function isSubsequence(str1, str2) {
    let i =0, j=0;
    while (j<str2.length) {
        if (str1[i] === str2[j]) {
            i++
        }
        j++
    }
    if (i === str1.length) {
        return true;
    }
    return false;
}

let output = isSubsequence('hello', 'hello world') //true
console.log(output)
output = isSubsequence('sing', 'sting') //t
console.log(output)
output = isSubsequence('abc', 'abracadabra') //t
console.log(output)
output = isSubsequence('abc', 'acb') //f (order matters)
console.log(output)