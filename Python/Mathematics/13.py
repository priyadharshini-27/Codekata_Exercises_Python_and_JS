'''
Given 2 numbers N,M. Print 'yes' if their product is a perfect square else print 'no'.
Sample Testcase :
INPUT
5 5
OUTPUT
yes
'''
import math
m,n=map(int,input().split())
if (m*n)==math.sqrt(m*n)**2:
    print("yes")
else:
    print("no")
