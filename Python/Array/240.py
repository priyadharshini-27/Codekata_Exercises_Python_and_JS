'''
Given a number n followed by n numbers. 
Find the numbers which are equal to their index value and print them in sorted order. 
If no such numbers are present print '-1' without quotes.
Input Size : 1 <= n <= 100000
Sample Testcases :
INPUT
6
6 7 3 3 4 5
OUTPUT
3 4 5
'''
n=int(input())
arr=list(map(int,input().split()))
arr_1=[]
for i in range(n):
    if i==arr[i]:
        arr_1.append(i)
if len(arr_1)!=0:
    print(' '.join(map(str,arr_1)))
else:
    print(-1)
