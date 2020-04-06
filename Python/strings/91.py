'''
Given a string S consisting of only '(' and ')', 
print 'yes' if it is balanced otherwise print 'no'.
Sample Testcase :
INPUT
(())
OUTPUT
yes
'''
s=input()
s=list(s)
arr=[]
arr1=[]
for i in range(len(s)):
    if '('==s[i]:
        arr.append(s[i])
for j in range(len(s)):
    if ')'==s[j]:
        arr1.append(s[j])
if len(arr)==len(arr1):
    print('yes')
else:
    print('no')
