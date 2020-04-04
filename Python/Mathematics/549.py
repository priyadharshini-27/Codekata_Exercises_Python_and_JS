'''You are given with a number ‘n’. 
You have to count the pair of two numbers a and b such that sum of two numbers are equal to n.
Note:Both numbers lie in range 1<=a,b<n
Input Description:
You are given a number ‘n’
Output Description:
Print the number of pairs satisfying above condition
Sample Input :
5
Sample Output :
4
'''
n=int(input())
arr=[]
c=0
for number in range(n):
    arr.append(number)
for index in range(len(arr)):
    for ind in range(1,len(arr)):
        if arr[ind]+arr[index]==n:
            c=c+1
print(c)
