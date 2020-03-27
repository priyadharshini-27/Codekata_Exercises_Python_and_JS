/*Ria is a 5 year old girl. 
Her mother wants to teach her how to sort words in the same order that they appear in a dictionary. 
She decides to write a program to sort a given set of strings based on their alphabetical order. Help Ria’s mother to complete the program.
Sample Input :
3
InfinityWar EndGame Avengers
Sample Output :
Avengers EndGame InfinityWar
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
	console.log(alphaSort(userInput));
});
var alphaSort=function(array){
var length=parseInt(array[0]);
var string=array[1].split(' ')
return string.sort().join(" ");
}
