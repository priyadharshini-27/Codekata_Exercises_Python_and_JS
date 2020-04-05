'''
Given two numbers L,R print the smallest number which is divisible by both L and R.
Input Size : 1 <= L,R <= 100000
Sample Testcase :
INPUT
10 130
OUTPUT
130
'''
l,r=map(int,input().split())
s=[]
for i in range(1,1000):
    if i%l==0 and i%r==0:
        s.append(i)
minimum=s[0]
for i in range(1,len(s)):
    if minimum>s[i]:
        minimum=s[i]
print(minimum)
