'''
Given an array of numbers and another number k. 
Find whether K exists and the number of time k repeats. 
If it does not exist just print no.
Input Size : |N| <= 1000000
Sample Testcase :
INPUT
5 3
3 3 4 4 7
OUTPUT
yes 2
'''
n,k=map(int,input().split())
arr=list(map(int,input().split()[:n]))
c=0
for i in range(n):
   if k==arr[i]:
       c+=1
if k in arr:
    print('yes',c)
else:
    print('no')
