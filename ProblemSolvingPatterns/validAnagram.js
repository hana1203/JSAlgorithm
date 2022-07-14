function validAnagram(str1, str2) {
    //str1,2 길이가 다르다면 무조건 false
    //str1 기준으로 반복문 돌리면서 charObj1 객체, charObj2객체에 key에는 문자, value에는 문자의 빈도수 저장
    //다 만들어진 객체 charObj1 기준으로  charObj2와 키값이 일치하는지? 빈도수도 일치하는지? 확인하고 먼저 일치안하는 것들 반환.
    //모두 일치하면 true 반환
    let charObj1 = {};
    let charObj2 = {};
    if (str1.length !== str2.length) {
        return false;
    } 

    for (let char of str1) {

        //char이 obj1 객체의 키에 없으면 새로 추가
        //char이 이미 obj1 객체의 키에 있으면 value 값 1씩 증가
        (!charObj1[char])? charObj1[char] = 1: charObj1[char]++;
        // (!charObj2[char])? charObj2[char] = 1: charObj1[char] = charObj1[char]+1;
    }

    for (let char2 of str2) {
        (!charObj2[char2])? charObj2[char2] = 1: charObj2[char2]++;
    }
    console.log(charObj1)
    console.log(charObj2)
      
    for (let key in charObj1) {
        //obj1에 있는 키가 obj2 에도 있는지? 
        if (!key in charObj2) {
            return false;
        } 
        //obj1의 밸류와 obj2의 밸류가 일치하는지?
        if (charObj1[key] !== charObj2[key]) {
            return false;
        }
    } 
    return true;
}

// validAnagram('', '') // true
console.log(validAnagram('aaz', 'zza')) // false
console.log(validAnagram('anagram', 'nagaram')) // true
console.log(validAnagram("rat","car")) // false
console.log(validAnagram('awesome', 'awesom')) // false
// validAnagram('qwerty', 'qeywrt') // true
// validAnagram('texttwisttime', 'timetwisttext') // true
