'''You are provided with two numbers.
Find and print the smaller number.
Sample Input :
23 1
Sample Output :
1
'''
a,b=map(int,input().split())
if a>b:
    print(b)
else:
    print(a)
