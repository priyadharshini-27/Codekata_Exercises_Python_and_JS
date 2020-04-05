'''
Given 2 numbers N,X and an array of N elements, 
check if there exists any 2 numbers in the array with sum equal to X.
If found print 'yes' otherwise print 'no'
Input Size : N,X <= 100000
Sample Testcase :
INPUT
4 4
2 2 0 0
OUTPUT
yes
'''
n,k=map(int,input().split())
arr=list(map(int,input().split()[:n]))
c=0
for i in range(n):
    start=arr[i]
    for j in range(i+1,n):
        if k==start+arr[j]:
            c=c+1
if c!=0:
    print("yes")
else:
    print('no')
        
