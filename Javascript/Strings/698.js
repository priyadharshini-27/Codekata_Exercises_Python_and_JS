/*You are given a string ‘s’.
Your task is to find whether string is beautiful or not. 
A string is said to be beautiful whenever string is made up of only three characters. All the three characters must be distinct.
Print true if string is beautiful and false when it is not beautiful.
Sample Input :
Aab
Sample Output :
1*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(sets(data))
});
var sets=function(string){
if ((Array.from(new Set(string)).length)==3){
    return(1)
}else{
    return(0)}}
