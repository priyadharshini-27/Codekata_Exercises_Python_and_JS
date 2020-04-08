'''
Given a number N, Print sum of every didgit to the power of the weight of corresponding digit
(Explanation : If the input is 12345 and then output calculated as (1^0)+(2^1)+(3^2)+(4^3)+(5^4)).
Input Size : 1 <= N <= 100000
Sample Testcase :
INPUT
100
OUTPUT
1
'''
n=input()
arr=[int(n[x]) for x in range(len(n))]
s=0
for i in range(len(n)):
    s+=arr[i]**i
print(s)
