'''Prateek finds it difficult to judge the minimum element in the list of elements given to him. 
Your task is to develop the algorithm in order to find the minimum element.
Input Description:
You are given ‘n’ number of elements. Next line contains n space separated numbers.
Output Description:
Print the minimum element
Sample Input :
5
3 4 9 1 6
Sample Output :
1
'''
n=int(input())
arr=list(map(int,input().split()))[:n]
f=arr[0]
for number in range(1,n):
    if arr[number] < f:
        f=arr[number]
print(f)
