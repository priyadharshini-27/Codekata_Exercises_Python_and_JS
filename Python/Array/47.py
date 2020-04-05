'''
Given 2 numbers N,K and an array of N elements, print the number(s) that has been repeated K times.
Print them in ascending order if there are more than one number to be printed.If no element satisfies the pattern then print -1
Input Size : N,K <= 100000
Sample Testcase :
INPUT
5 2
1 2 4 1 2
OUTPUT
1 2
'''
n,k=map(int,input().split())
arr=list(map(int,input().split()[:n]))
new_arr=[]
for i in range(n):
    number=arr[i]
    c=1
    for j in range(i+1,n):
        if number==arr[j]:
            c=c+1
        if k==c:
            new_arr.append(number)
if len(new_arr)==0:
    print(-1)
else:
    new_arr=sorted(new_arr)
    print(' '.join(map(str,new_arr)))    
