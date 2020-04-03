'''A number is given as input. Find the odd digits in the number, add them and find if the sum is odd or not. 
If even print E, if odd print O.
Input Size : N <= 10000000000
Sample Testcase :
INPUT
413
OUTPUT
E'''
n=int(input())
list1=list(map(int, str(n))) 
list2=[]
for i in range(len(list1)):
    if list1[i]%2!=0:
        list2.append(list1[i])
s=0
for i in range(len(list2)):
    s=s+list2[i]
if s%2!=0:
    print('O')
else:
    print('E')
