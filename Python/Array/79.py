'''
Given a number N, print their prime factors in sorted order.
Input Size : 2 <= N <= 100000
Sample Testcase :
INPUT
18
OUTPUT
2 3'''
n=int(input())
arr=[]
def prime(o):
    p=0
    for j in range(1,o):
        if o%j==0:
            p=p+1
    if p==1:
        return p
for i in range(1,n+1):
    if n%i==0:
        c=0
        if prime(i)==1:
            arr.append(i)
print(' '.join(map(str,arr)))
