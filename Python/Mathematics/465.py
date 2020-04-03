'''A sequence is given by: 2, 6, 11, 17, 24,....
The first term is 2.
Given an integer N, find the Nth term of the sequence.
1 <= N <= 10^18
Since the answer can be very large print it modulo 1,000,000,007 (10^9 + 7)
Input Description:
The only line of input contains an integer N
Output Description:
Print the Nth term of the sequence
Sample Input :
5
Sample Output :
24
'''
n=int(input())
f=2
c=1
a=4
while c!=n:
    f=a+f
    a=a+1
    c=c+1
print(f)
