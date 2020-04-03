/*In a firm there is an intelligent employee. 
He said that he will not work on all those days which has factors more than 2. 
You are given with month and year calculate the no of working days of employee.
Sample Input :
May 2016
Sample Output :
11
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(workingDays(data))
});
var workingDays=function(n){
    n=n.split(" ");
    var month=n[0],year=parseInt(n[1]);
var days_31=['january','march','may','july','august','october','december']
var days_30=['april','june','september','november']
if ((((year%4==0) || (year%400==0)) && (year%100!=0)) && (month.toLowerCase()=='february')){
    return(10)}
else if (days_31.includes(month.toLowerCase())) {
    return(11)}
else if (days_30.includes(month.toLowerCase())){
    return(10)}
else{
    return(9)
}
}
