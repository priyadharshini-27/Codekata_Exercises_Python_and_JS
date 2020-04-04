'''Simi is learning about palindromic numbers.
Her teacher gave him the task to count all palindromic numbers present in that range.
Simi has told you about this and want your help.
You design an algorithm in order to help simi.
Sample Input :
5
Sample Output :
5
'''
def palindrome(n):
    s=0
    while n!=0:
        r=n%10
        s=r+(s*10)
        n=n//10
    return s
n=int(input())
c=0
for i in range(1,n+1):
    if palindrome(i)==i:
        c+=1
    else:
        continue
print(c)
