'''Given 3 numbers N , L and R. Print 'yes' if N is between L and R else print 'no'.
Sample Testcase :
INPUT
3
2 6
OUTPUT
yes'''
n=int(input())
l,r=map(float,input().split())
if l<n and n<r:
	print("yes")
else:
	print("no")

     
