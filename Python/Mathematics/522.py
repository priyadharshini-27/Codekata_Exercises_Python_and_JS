'''You are given a task to tell whether the number is pure or not.
A pure number is a number whose sum of digits is multiple of 3.
O(1) time and O(1) space
Sample Input :
13
Sample Output :
not
'''
n=int(input())
s=0
while n!=0:
    r=n%10
    s+=r
    n=n//10
if s%3==0:
    print("yes")
else:
    print("not")

