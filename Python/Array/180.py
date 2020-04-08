'''
Given an array N, sort it in ascending order till it reaches kth elements and after that sort it in descending order.
Input Size : N <= 100000
Sample Testcase :
INPUT
5 2
4 3 1 2 4
OUTPUT
3 4 4 2 1
'''
n,k=map(int,input().split())
arr=list(map(int,input().split()[:n]))
next_arr=[]
c=0
order_arr=[]
for j in range(n):
    if arr[j]>k:
        c+=1
    else:
        next_arr.append(arr[j])
        next_arr.reverse()
for i in range(c):
    maxi=max(arr)
    order_arr.append(maxi)
    index=arr.index(maxi)
    arr[index]=0
    order_arr.reverse()
for k in range(len(next_arr)):
    order_arr.append(next_arr[k])
print(' '.join(map(str,order_arr)))
