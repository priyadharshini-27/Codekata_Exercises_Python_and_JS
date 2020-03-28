/*
You are given a paragraph.Your task is to print the words that come just after articles.
Input Description:
You are given a string ‘s’
Output Description:
print the words that come just after articles and -1 if there are no articles
Sample Input :
The sun rises in the east
Sample Output :
Sun east
*/
const readline = require('readline');

const inp = readline.createInterface({
  input: process.stdin
});

inp.on("line", (data) => {
	console.log(word(data))
});
function word(s){
s=s.split(" ")
var articles=["the","a","an"],index=[],r=[];
for(let i=0;i<s.length;i++){
    if (articles.includes(s[i].toLowerCase())){
        index.push(i);
    }
}
if (index.length!==0){
    if (index[index.length-1]===s.length-1){
        for(let i=0;i<index.length-1;i++){
            let k=index[i]
            r.push(s[k+1])
        }
        return r.join(" ")
    }
    else{
        for(let i=0;i<index.length;i++){
            let k=index[i]
            r.push(s[k+1])
        }
        return r.join(" ")
    }
}
else{
    return -1
}

}
