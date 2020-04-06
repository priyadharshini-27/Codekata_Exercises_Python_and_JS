'''
Given a number N and an array of N elements, 
print all elements lesser than N in descending order.
If no element found print -1
Input Size : 1 <= N <= 10000
Sample Testcase :
INPUT
5
2 14 15 14 3
OUTPUT
3 2
'''
limit=int(input())
arr=list(map(int,input().split()[:limit]))
new_arr=[]
for i in range(limit):
    if arr[i]<limit:
        new_arr.append(arr[i])
if len(new_arr)==0:
    print(-1)
else:
    new_arr.sort(reverse=True)
    print(' '.join(map(str,new_arr)))
