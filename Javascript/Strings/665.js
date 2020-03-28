/*You are given a string.
Your task is to print only the consonants present in the string without affecting the sentence spacings if present. 
If no consonants are present print -1
Sample Input :
I am shrey 
Sample Output :
 m shry
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(anti_vowel(data))
});
function anti_vowel(c){
    var newstr = c
    var vowels = ['a', 'e', 'i', 'o', 'u','A','E','I','O','U']
    for(var i=0;i<c.length;i++){
        if (vowels.includes(c[i])){
            newstr = newstr.replace(c[i],"")
}}
    var result =newstr;
    if (result.length==0){
        return(-1)}
    else{
        return(result)}}
