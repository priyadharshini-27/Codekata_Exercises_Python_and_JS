'''you are given a string made up of parenthesis only.
Your task is to check whether parenthesis are balanced or not.
If they are balanced print 1 else print 0
Sample Input :
{({})}
Sample Output :
1'''
n=input()
if len(n)%2==0:
    print("1")
else:
    print("0")
