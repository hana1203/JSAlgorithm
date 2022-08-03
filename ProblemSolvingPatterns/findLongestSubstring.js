function findLongestSubstring(str){
    //str 각 글자 반복돌리면서 확인한 글자 담을 객체 (key에는 확인한 글자, value에는 count)
    let checked = {};
    let l = 0;
    let res = 0
    for (let r=0; r<str.length; r++) {
        let c = str[r];
        if(c in checked){
            res = Math.max(res, r-l);
            for(let i=0;i<=checked[c];i++){
                delete checked.str[i]
            }
            checked[c] = r
        }else{
            checked[c] = r
        }

    }
    console.log(res)
}
  
// findLongestSubstring('rithmschool'); //7 rithmsc
findLongestSubstring('thisisawesome') //6 awesom
// findLongestSubstring('thecatinthehat') //7 hecatin
// findLongestSubstring('bbbbbb') //1
