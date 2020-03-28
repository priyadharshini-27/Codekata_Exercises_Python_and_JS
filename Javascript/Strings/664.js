/* You are given a string ‘s’.Your task is to print the string in alternate lowercase and uppercase.
Sample Input :
abcd efgh ijkl
Sample Output :
ABCD efgh IJKL
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(alternateCase(data))
});
function alternateCase(n)
{
n=n.split("")
for(var i=0;i<n.length;i++){
    if (i%2==0){
        n[i]=n[i].toUpperCase()}
    else{
        n[i]=n[i].toLowerCase()}}
return(n.join(''))
}
