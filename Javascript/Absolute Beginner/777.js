/*You will be provided with a number. 
Print the number of days in the month corresponding to that number.
Note: In case the input is February, print 28 days. 
If the Input is not in valid range print "Error".
Sample Input :
8
Sample Output :
31
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(month(data))
});

var month=function(n){
    var a=[1,3,5,7,8,10,12];
    var b=[4,6,9,11];
    n=parseInt(n);
    if (a.includes(n))   
    {
        return 31;
    }
    else if (b.includes(n)) 
    {
        return 30;
    }
    else if(n==2) {
      return 28;  
    }
    else{
        return("Error")
    }
}
