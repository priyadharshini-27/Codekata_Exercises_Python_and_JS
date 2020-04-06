'''
Given a number N and an array of N elements,
sort the array in increasing order and print the original indices of the elements present in sorted array.
Input Size : N <= 100000
Sample Testcase :
INPUT
5
5 4 3 2 1
OUTPUT
5 4 3 2 1
'''
limit=int(input())
arr=list(map(int,input().split()[:limit]))
new_arr=[]
index=[]
for i in range(limit):
    maximum=max(arr)
    index_value=arr.index(maximum)
    new_arr.append(maximum)
    arr[index_value]=0
    index.append(index_value+1)
print(' '.join(map(str,index[::-1])))
