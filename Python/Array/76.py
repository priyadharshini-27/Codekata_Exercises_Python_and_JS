'''
Given a number N and an array of N elements, every number is repeated except for one. Print that one number.
Input Size : 1 <= N <= 100000
Sample Testcase :
INPUT
10
1 2 3 2 3 3 2 5 5 2
OUTPUT
1
'''
limit=int(input())
arr=list(map(int,input().split()[:limit]))
n=[0,0,0,0,0,0,0,0,0,0]
for i in range(limit):
    if arr[i] in arr:
        j=arr[i]
        n[j]=n[j]+1
for i in range(len(n)):
    if n[i]==1:
        print(i)
