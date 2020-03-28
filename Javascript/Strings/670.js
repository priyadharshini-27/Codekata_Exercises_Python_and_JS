/*You are given a string ‘s’. 
Your task is to tell whether string is beautiful or not.
A beautiful string is a string in which String starts with ‘a’ or ‘A’ and middle element is either ‘m’ or ‘M’ and last element is ‘z’or ‘Z’
Sample Input :
Amz
Sample Output :
1
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(firstLastMiddle(data))
});
function firstLastMiddle(s)
{
var length=s.length;
s=s.split("");
if ((s[0]=="a" || s[0]=="A") && (s[length-1]=='z'|| s[length-1]=='Z')){
    if (length%2!=0){
        if (s[parseInt(length/2)]=='m' || s[parseInt(length/2)]=='M'){
            return(1)}}
    else{
        var l=parseInt(length/2)
        if ((s[l]=='m' || s[l]=='M') || (s[l-1]=='m' || s[l-1]=='M')){
            return(1)}}}
else{
    return(0)}}
