/*You are given a ‘true’ string. 
String is called true if weight of string is multiple of 8. 
Your task is to tell whether a string can be declared True or Not. 
Weight of string is the sum of ASCII value of Vowel character(s) present in the string.
Sample Input :
raja
Sample Output :
0
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(vowels(data))
});
var vowels=function(string){
var length=string.length,vowels=['a','e','i','o','u'],weight=0;
for(var i=0;i<length;i++){
    if (vowels.includes(string[i])){
        weight+=string.charCodeAt(i);
    }
}if (weight%8==0){
    return 1;
}
else{
    return 0;
}
}
