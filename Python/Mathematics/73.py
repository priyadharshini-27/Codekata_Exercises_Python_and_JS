'''Given a number N, print the sum of the squares of its digits.
Input Size : 1 <= N <= 1000000000000000000
Sample Testcase :
INPUT
19
OUTPUT
82'''
n=int(input())
s=0
while n!=0:
    r=n%10
    s=s+(r**2)
    n=n//10
print(s)
