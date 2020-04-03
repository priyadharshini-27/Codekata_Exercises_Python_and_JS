'''You are given an integer N, find if the number is divisible by 4.
N >= 1
1 <= No. of digits in N <= 1000
Input Description:
Read an integer N
Output Description:
Print YES if N is divisible by 4, NO otherwise.
Sample Input :
64
Sample Output :
YES'''
n=int(input())
if n%4==0:
	print("YES")
else:
	print('NO')
