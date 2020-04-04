/*
You are given with an array. 
Your task is to print the right rotated array after k operations.
Time:O(n)
Extra Space: O(1)
Input Description:
First line contains two number ‘n’ and ‘k’.Next line contains n space separated numbers.
Output Description:
Print the array as mentioned.
Sample Input :
14 117
15 26 35 98 61 1230 75 96 63 21 1654 98654 320145 987
Sample Output :
21 1654 98654 320145 987 15 26 35 98 61 1230 75 96 63 
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
	console.log(rightShift(userInput));
});
function rightShift(number){
    var n=number[0].split(" "),limit=parseInt(n[0]),shift=parseInt(n[1]),
    list=number[1].split(" ");
    for(var i=0;i<limit;i++){
        list[i]=parseInt(list[i]);
    }
    for(var n1=0;n1<shift;n1++){
        last=list[limit-1];
        for(var n2=limit-1;n2>0;n2--){
            list[n2]=list[n2-1];
        }
        list[0]=last
    }
    return list.join(" ");
}588
