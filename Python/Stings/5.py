'''Given a string S, print 'yes' if it is a palindrome or 'no' if it is not a palindrome.
Sample Testcase :
INPUT
lappal
OUTPUT
yes
'''
s=input()
if s==s[-1::-1]:
	print("yes")
else:
	print("no")
