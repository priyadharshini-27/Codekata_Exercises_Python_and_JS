'''
Given a number N, print the odd digits in the number(space seperated) or print -1 if there is no odd digit in the given number.
Input Size : N <= 100000
Sample Testcase :
INPUT
2143
OUTPUT
1 3
'''
n=input()
arr=[]
for i in range(len(n)):
    if (int(n[i]))%2!=0:
        arr.append(int(n[i]))
if (len(arr))!=0:
    print(' '.join(map(str, arr))) 
else:
    print(-1)
