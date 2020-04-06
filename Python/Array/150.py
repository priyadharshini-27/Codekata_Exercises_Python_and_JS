'''
Given a number N, print all the prime factors once in ascending order.
Input Size : N <= 100000
Sample Testcase :
INPUT
100
OUTPUT
2 5
'''
n=int(input())
arr=[]
def prime(number):
    c=0
    for i in range(2,number):
        if number%i==0:
            c=c+1
    if c==0:
        return 0
for i in range(2,n):
    if n%i==0:
        if prime(i)==0:
            arr.append(i)
print(' '.join(map(str,arr)))
