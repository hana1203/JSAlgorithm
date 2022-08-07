// Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.
//배열을 받아서 각 단어가 모두 대문자로 바뀐 배열을 리턴  
function capitalizeWords(arr) {
    let result = [];
    function helper(arr) {
        for (let words of arr) { 
            if (words !== words.toUpperCase()) {//각 단어가 대문자가 아니면?
                words = words.toUpperCase();
            }
            result.push(words);
        }
        return result;
    }
    return helper(arr); //return 안하면 undefined 
}

let out = capitalizeWords(["life","is","so","cool"]);
console.log(out) //["LIFE", "IS", "SO", "COOL"]
