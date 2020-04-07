'''
Given a number N and an array of N integers, 
find the greatest number which divides all the elements of the array.
Input Size : N <= 100000
Sample Testcase :
INPUT
5
1 2 3 4 5
OUTPUT
1
'''
limit=int(input())
arr=list(map(int,input().split()))
maximum=max(arr)
divi=[]
for i in range(1,maximum):
    c=limit
    for j in range(limit):
        if arr[j]%i==0:
            c-=1
    if c==0:
        divi.append(i)
print(max(divi))
