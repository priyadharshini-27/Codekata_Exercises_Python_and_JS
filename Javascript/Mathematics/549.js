/*
You are given with a number ‘n’. 
You have to count the pair of two numbers a and b such that sum of two numbers are equal to n.
Note:Both numbers lie in range 1<=a,b<n
Input Description:
You are given a number ‘n’
Output Description:
Print the number of pairs satisfying above condition
Sample Input :
5
Sample Output :
4
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(pair(parseInt(data)))
});
function pair(n){
var arr=[],c=0;
for(var number=0;number<n;number++) {
    arr.push(number);
}
for(var index=0;index<arr.length;index++){
    for(var ind=1;ind<arr.length;ind++){
        if (arr[ind]+arr[index]==n){
            c=c+1;
        }
    }
}
return(c)
}
