'''Given a number N, check if N is divisible by any number less than N (ie.,it leaves no remainder)except 1.
Input Size : 1 <= N <= 100000
Sample Testcase :
INPUT
10
OUTPUT
yes'''
n=int(input())
for x in range(2,n+1):
    if n%x==0:
        print('yes')
        break
    else:
        print('no')
        break
