'''You are given a number ‘n’.
You have to tell whether a number is great or not.
A great number is a number whose sum of digits let (m) and product of digits let(j) when summed together gives the number back
m+j=n
Sample Input :
59
Sample Output :
Great'''
s=0
m=1
n=float(input())
t=n
while n!=0:
    r=n%10
    s=s+r
    m=m*r
    n=n//10
if (m+s)==t:
    print("Great")
else:
    print("no")
