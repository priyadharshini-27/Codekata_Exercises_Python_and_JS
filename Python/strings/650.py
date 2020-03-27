'''Given a string 'S' print the sum of weight of the String. 
A weight of character is defined as the ASCII value of corresponding character.
Sample Input :
abc
Sample Output :
294'''
n=input()
s=0
for i in range(0,len(n)):
   s+=ord(n[i])
print(s)
