'''Count the number of digits of a given number N.Size of the integer ranges from 1
Sample Testcases :
INPUT
548
OUTPUT
3
'''
n=int(input())
c=0
while n!=0:
	n=n//10
	c+=1
print(c)
	
