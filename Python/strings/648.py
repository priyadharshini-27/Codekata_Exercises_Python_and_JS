''' You are given a string. 
You have to print “Wonder” if the string is wonderful and -1 if it is not. 
A wonderful string is a string,which is made up of exactly 3 characters.
Sample Input :
aabbcc
Sample Output :
Wonder'''
n=input()
t=set(list(n))
if len(t)==3:
    print("Wonder")
else:
    print(-1)
