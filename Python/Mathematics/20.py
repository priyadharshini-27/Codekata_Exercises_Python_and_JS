'''Given a number N, print its reverse.
Input Size : n <= 1000
Sample Testcase :
INPUT
10
OUTPUT
1
'''
t=0
n=int(input())
while(n>0):
    r=n%10
    t=(t*10)+r
    n=n//10

print(t)
