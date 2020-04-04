'''
You are given a number ‘n’.
Your task is to develop an algorithm to tell whether the number is ‘ajs’ or not.
An ‘ajs’ number is a number whose sum of first two digits is present in given number ‘n’
Output Description:
Print 1 if number is ajs or 0 if it is not
Sample Input :
9817
Sample Output :
1
'''
m=input()
n=int(m)
arr=[]
while n>0:
   r=n%100
   s=n%10
   arr.append(s)
   arr.append(r)
   n=n//10
sum=int(m[0])+int(m[1])
if sum in arr:
    print(1)
else:
    print(0)
print(arr)
  
