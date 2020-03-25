'''You are given three numbers A, B & C. 
Print the largest amongst these three numbers.
Sample Input :
1
2
3
Sample Output :
3
'''
a=int(input())
b=int(input())
c=int(input())
if a>b and a>c:
	print(a)
elif b>c and b>a:
	print(b)
else:
	print(c)
