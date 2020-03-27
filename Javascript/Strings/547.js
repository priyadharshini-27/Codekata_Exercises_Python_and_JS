/*In XYZ country there is rule that car’s engine no. depends upon car’ number plate. 
Engine no is sum of all the integers present on car’s Number plate.
The issuing authority has hired you in order to provide engine no. to the cars.
Your task is to develop an algorithm which takes input as in form of string(Number plate) and gives back
Engine number.
Sample Input :
HR05-AA-2669
Sample Output :
28
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(number(data))
});
var number=function(n){
    array=[];
    s=0;
    for(var j=0;j<n.length;j++){
        if (Number.isInteger(Number(n[j]))){
            array.push(n[j]);
        }
    }
    for(var i=0;i<array.length;i++){
        s+=parseInt(array[i]);
    }
    return s;
}
