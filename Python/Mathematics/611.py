'''You are given given task is to print whether array is ‘majestic’ or not.
A ‘majsetic’ array is an array whose sum of first three number is equal to last three number.
Sample Input :
7
1 2 3 4 6 0 0
Sample Output :
1'''
n=int(input())
s1=0
s2=0
l=list(map(int,input().split()))[:n]
for i in range(0,3):
	s1+=l[i]
for i in range(-1,-4,-1):
	s2+=l[i]
if s1==s2:
	print(1)
else:
	print(0)

