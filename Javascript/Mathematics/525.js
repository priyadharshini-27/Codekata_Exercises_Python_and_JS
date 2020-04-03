/*Rampal is a number in which the sum of last two digits of that number is multiple of 4.
Your teacher has given you the task to make a list of rampal numbers.
Your task is to tell whether the number is rampal or not.
Note : if the number is negative than rampal is a number which has sum of first and last digit as multiple of 4  
Input Description:
First line contains an input n
Output Description:
Print yes or no
Sample Input :
20
Sample Output :
no
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(sum(data))
});
function sum(n){
    if (n<0){
     n=Math.abs(n)
     n=n.toString()
     let l=n.split(""),
     length=l.length,
     s=parseInt(l[0])+parseInt(l[length-1]);
     if ((s%4)===0){
         return "yes";
     }
     else{
         return "no";
     }
    }
    else{
        let l=n.split(""),
        length=l.length,s=0;
        for(var i=length-1;i>length-3;i--){
            s+=parseInt(l[i]);
        }
        if (s%4===0){
            return "yes";
        }
        else{
            return "no";
        }
    }
}
