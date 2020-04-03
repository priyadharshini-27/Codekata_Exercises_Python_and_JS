'''Given a number N, check if the sum of the digits is a Palindrome. Print 'yes' or 'no' accordingly.
Input Size : 2 <= N <= 1000000000000000000
Sample Testcases :
INPUT
13
OUTPUT
yes'''
n=int(input())
s=0
p=0
while n!=0:
    r=n%10
    s+=r
    n=n//10
if len(str(s))==1:
    print("yes")
elif len(str(s))>1:
    n=int(s)
    while n!=0:
        r=n%10
        p=p*10+r
        n=n//10
    if p==s:
        print('yes')
    else:
        print('no')
        

        
