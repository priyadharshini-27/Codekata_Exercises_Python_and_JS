'''
Given a number N, print the even factors of N.
If the even factor does not exists for N print '-1'.
Input Size : 1 <= N <=1000
Sample Testcase :
INPUT
8
OUTPUT
2 4 8
'''
n=int(input())
arr=[]
for f in range(2,n+1):
    if n%f==0 and f%2==0:
        arr.append(f)
if len(arr)!=0:
    print(' '.join(map(str,arr)))
else:
    print(-1)
