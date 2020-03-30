'''Given 2 numbers N,M. Find their difference and check whether it is even or odd.
Sample Testcase :
INPUT
5 5
OUTPUT
even
'''
n,m=map(int,input().split())
if (n-m)%2==0 or (m-n)%2==0:
	print("even")
else:
	print("odd")
