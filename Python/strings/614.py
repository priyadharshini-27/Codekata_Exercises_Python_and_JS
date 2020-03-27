''' Radha newly learnt about palindromic strings.
A palindromic string is a string which is same when read from left to right and also from right to left.
Help her in implementing the logic.
Sample Input :
NITIN
Sample Output :
1'''
string=input()
Reverse=string[::-1]
if string==Reverse:
	print(1)
else:
	print(0)
