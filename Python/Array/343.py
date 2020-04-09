'''
Given k sorted arrays of possibly different sizes, merge them and print the sorted output.
Input Size : N<=100
Example:
INPUT
k = 3
1 3
2 4 6
0 9 10 11
OUTPUT
0 1 2 3 4 6 9 10 11
'''
k=int(input())
arr=[]
for i in range(k):
    arr_1=list(map(int,input().split()))
    for j in range(len(arr_1)):
        arr.append(arr_1[j])
arr.sort()
print(' '.join(map(str,arr)))
