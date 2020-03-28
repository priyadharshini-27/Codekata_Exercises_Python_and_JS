/*You are given two strings . Your task is to tell whether the pair of strings is panagram.
A pair of strings are said to be panagram if they both are palindrome and are anagram of each other.
Sample Input :
nitin intni
Sample Output :
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(reverse(data))
});
var reverse=function(n){
n=n.split(" ");
var first=n[0].split('').reverse().join('')
var second=n[1].split('').reverse().join('')
    if ((n[0]==first) && (n[1]==second)){
        return 1;
    }
else{
    return 0;
} 
}
