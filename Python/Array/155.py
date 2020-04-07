'''
Given a number N and an array of N integers, 
predict if the product of all elements would be even or odd(actual multiplication may lead to overflows ai <= 100000000).
If there is only one element present in the array print whether that number is odd or even.
Input Size : N <= 100000
Sample Testcase :
INPUT
4
2 4 4 2
OUTPUT
even
'''
n=int(input())
arr=list(map(int,input().split()[:n]))
def determine(n1):
    if n1%2==0:
        print('even')
    else:
        print('odd')
if n==1:
    determine(arr[0])
else:
    m=1
    for i in range(n):
        m*=arr[i]
    determine(m)
