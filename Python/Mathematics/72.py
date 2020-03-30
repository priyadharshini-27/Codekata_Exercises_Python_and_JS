'''
Given two numbers N,K followed by an array of N elements, print the array after doing right shift K times (in cyclic manner).
Input Size : 1 <= N, K <= 100000
Sample Testcase :
INPUT
3 2
7 2 3
OUTPUT
2 3 7'''
n,shift=map(int,input().split())
array=list(int(x) for x in input().split())[:n]
c=0
while c!=shift:
    last=array.pop()
    array.insert(0,last)
    c=c+1
length=len(array)
for i in range(0,length):
    if i!=(length-1):
        print(array[i],end=' ')
    else:
        print(array[i])
