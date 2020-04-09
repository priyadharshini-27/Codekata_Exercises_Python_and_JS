'''
You are given a number n,ranging from 1 to n. 
Out of which one number is missing. 
Your task is to print that missing number.
Input Description:
You are given a number ‘n’.
Output Description:
Print the missing number.
Sample Input :
5
1 3 5 2
Sample Output :
4
'''
n=int(input())
arr=list(map(int,input().split()))
arr_1=[]
for k in range(1,n+1):
    arr_1.append(k)
arr.sort()
arr.append(0)
for i in range(5):
    if arr[i]!=arr_1[i]:
        a=arr_1[i]
        break
print(a)
