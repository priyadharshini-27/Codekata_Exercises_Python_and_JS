/*
Using the method of looping, write a program to print the table of 9 till N in the format as follows:
(N is input by the user)
9 18 27...

Sample Input :
3
Sample Output :
9 18 27
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (num) => {
	console.log(mul(num))
});
var mul=function(n){
    var arr=[];
    if(n!=0)
    {
        for(var i=1;i<=n;i++)
    {
        if (i!=n){
        arr.push(i*9);}
        else{
            var result=arr.join(" ")+" "+(i*9).toString();
        }
    }
        return result;
    }
    else{
        return ("NULL");
    }
}
