'''
Given a range (i.e) two numbers L and R count the number of perfect squares within the range (inclusive of L and R).
If no perfect square exists within the range print '-1'.
Input Size : L <= R <= 100000(complexity O(n))
Sample Testcase :
INPUT
2 10
OUTPUT
2
'''
l,r=map(int,input().split())
s=[]
def perfect(number):
    for i in range(number+1):
        if number == i*i:
            s.append(number)
for i in range(l,r+1):
    perfect(i)
if len(s)==0:
    print(-1)
else:
    print(len(s))
