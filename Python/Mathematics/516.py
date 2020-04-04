'''Assume your brother studies in class 2.
He has to  complete his homework on co-primes.
As an elder sibling help him in finding whether the given two numbers is co-prime or not.
Sample Input :
3 5
Sample Output :
1'''
a,b=map(int,input().split())
if a>b:
    small=a
else:
    small=b
for i in range(1,small+1):
    if ((a%i==0) and (b%i==0)):
        hcf=i
if hcf==1:
    print("1")
else:
    print("0")
