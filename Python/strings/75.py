'''
Given a string S,count the maximum number of times a character repeated in the string.
If no character is repeated print '0'.
Input Size : 1 <= N <= 100000
Sample Testcase :
INPUT
codekata
OUTPUT
2
'''
s=input()
s=list(s)
count=[]
for i in range(len(s)):
    c=0
    f=s[i]
    for j in range(len(s)):
        if f==s[j]:
            c=c+1
    count.append(c)
print(max(count))
