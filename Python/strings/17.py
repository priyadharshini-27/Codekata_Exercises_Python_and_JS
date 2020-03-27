'''Given a string S, print 2 strings such that first string containing all characters in odd position(s) and other containing all characters in even position(s).
Sample Testcase :
INPUT
XCODE
OUTPUT
XOE CD
'''
n=input()
a=[]
b=[]
for i in range(0,len(n)):
    if i%2==0:
        a.append(n[i])
    else:
        b.append(n[i])
print(("".join(map(str,a)))+ " "+("".join(map(str,b))))

