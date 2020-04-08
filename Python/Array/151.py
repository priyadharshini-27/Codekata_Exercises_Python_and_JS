'''
Given a number N and an array of N integers, 
find the smallest number divisible by all the elements of the array.
Input Size : N <= 100000
Sample Testcase :
INPUT
5
1 2 3 4 5
OUTPUT
60
'''
n=int(input())
arr=list(map(int,input().split()[:n]))
m=1
for i in range(n):
    m*=arr[i]
arr1=[]
for j in range(1,m+1):
    a=0
    for k in range(n):
        if j%arr[k]==0:
            a+=1
    if a==n:
        arr1.append(j)
print(min(arr1))
