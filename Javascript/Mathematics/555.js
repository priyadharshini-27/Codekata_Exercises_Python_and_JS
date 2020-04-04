/*Assume that you are ticket verifier at a club. 
Your club has decided to give a special discount to the person(s) who are satisfying the following condition
Condition:-
If ticket number is divisible by date of month. You are eligible for a discount.
Input Description:
First line contains input ‘n’.Next line contains n space separated numbers denoting ticket numbers .
Next line contains ‘k’ date of the month.
Output Description:
Print 1 if the ticket is eligible for discount else 0
Sample Input :
6
112 139 165 175 262 130
22
Sample Output :
0 0 0 0 0 0
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	console.log(tickets(userInput));
});
function tickets(n){
var limit=parseInt(n[0]),
arr=n[1].split(" "),
date=parseInt(n[2]),new_arr=[];
for(var ticket=0;ticket<limit;ticket++){
    if (parseInt(arr[ticket])%date===0){
        new_arr.push(1)}
    else{
        new_arr.push(0)
}}
  return new_arr.join(" ")
}
