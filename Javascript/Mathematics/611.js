/*You are given given task is to print whether array is ‘majestic’ or not.
A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.
Sample Input :
7
1 2 3 4 6 0 0
Sample Output :
1*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
	userInput.push(data);
});

inp.on("close", () => {
	console.log(sum(userInput));
});
var sum=function(n){
    m=parseInt(n[0]),arr=[],t=n[1].split(" ");
    for(var i=0;i<m;i++){
        arr.push(parseInt(t[i]))
    }
    var s1=0,s2=0;
    for (var i=0;i<3;i++){
        s1+=arr[i];
    }
    for(var j=(m-1);j>(m-4);j--){
        s2+=arr[j]
    }
    if (s1==s2){
        return 1;
    }
    else{
        return 0;
    }
    }
