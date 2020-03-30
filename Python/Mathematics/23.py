'''
Given a number N, print the product of the digits.
Input Size : N <= 100000000000
Sample Testcase :
INPUT
2143
OUTPUT
24
'''
m=1
n=float(input())
while n!=0:
	r=n%10
	m=m*r
	n=n//10
print(m)
