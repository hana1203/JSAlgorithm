function reverse(str){
    // add whatever parameters you deem necessary - good luck!
    //base case : str의 길이가 0이면 빈문자열 반환
    if (str.length === 0) {
        return ""; //return만 넣으면 맨마지막이 언디파인 emosewaundefined
    }
    //different input : 마지막 문자 + 재귀함수로 호출하는데 이제 0번째부터 마지막문자는 뺀 나머지로 호출
    return str[str.length-1] + reverse(str.slice(0,str.length-1))
}
  
 let output= reverse('awesome') // 'emosewa'
 console.log(output)
 output= reverse('rithmschool') // 'loohcsmhtir'
 console.log(output)