'''Given a range[L,R], print the sum of all the odd numbers within the range(inclusive of L and R).
Sample Testcase:
INPUT
5 10
OUTPUT
21'''
l,r=map(int,input().split())
s=0
for i in range(l,r+1):
    if i%2!=0:
        s=s+i
