/*You are given three numbers A, B & C. Print the largest amongst these three numbers.
Sample Input :
1
2
3
Sample Output :
3
*/
const read = require('readline');

const inp = read.createInterface({
  input: process.stdin
});

const intersetDetails= [];

inp.on("line", (data) => {
	intersetDetails.push(data);
});

inp.on("close", () => {
	console.log(greater(intersetDetails));
});
var greater=function(n){
    if ((n[0]>n[1]) && (n[0]>n[2])){
        return(n[0]);
    }
    else if ((n[1]>n[0]) && (n[1]>n[2])){
        return(n[1]);
    }
    else
    {
        return(n[2]);
    }
}
