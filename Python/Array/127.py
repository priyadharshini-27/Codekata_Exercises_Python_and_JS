'''
Given a number N and a number K, check if it has all digits from 0 to k in it.
Input Size : N <= 100000
Sample Testcase :
INPUT
1234034 4
OUTPUT
yes
'''
n,k=map(int,input().split())
n=str(n)
c=[]
n=[int(n[i]) for i in range(len(n))]
for j in range(len(n)):
    for r in range(k+1):
        if r==n[j]:
            c.append(r)
l=len(set(c))
if l-1==k:
    print('yes')
else:
    print('no')
