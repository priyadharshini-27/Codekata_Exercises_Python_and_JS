'''You are given a paragraph.Your task is to print the words that come just after articles.
Input Description:
You are given a string ‘s’
Output Description:
print the words that come just after articles and -1 if there are no articles
Sample Input :
The sun rises in the east
Sample Output :
Sun east
'''
s=input()
s=s.split(" ")
articles=["the","a","an"]
index=[]
r=[]
for i in range(len(s)):
    if s[i].lower() in articles:
        index.append(i)
if len(index)!=0:
    if index[len(index)-1]==len(s)-1:
        for i in range(len(index)-1):
            k=index[i]
            r.append(s[k+1])
        print(" ".join(map(str,r)))
    else:
        for i in range(len(index)):
            k=index[i]
            r.append(s[k+1])
        print(" ".join(map(str,r)))
else:
    print(-1)
