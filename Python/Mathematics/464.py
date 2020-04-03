'''Given an integer N, find if it is divisible by 11
N >= 1
1 <= No. of digits in N <= 1000
Input Description:
The only line of input contains an integer N
Output Description:
Print YES if N is divisible by 11, NO otherwise.
Sample Input :
1331
Sample Output :
YES'''
n=int(input())
if n%11==0:
    print('YES')
else:
    print('NO')
