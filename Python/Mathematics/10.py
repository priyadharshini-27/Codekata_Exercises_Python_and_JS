'''
Given a number N, print 'yes' if it is composite else print 'no'.
Sample Testcase :
INPUT
123
OUTPUT
yes
'''
N=int(input())
if N>0:
    c=0
    for i in range(2,N):
        if N%i==0:
            c=c+1
    if c>=1:
        print("yes")
    else:
        print("no")
