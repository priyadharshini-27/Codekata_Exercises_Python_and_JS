'''You are provided with a number ’n’.
Your task is to tell whether that number is saturated.
A saturated number is a number which is made by exactly two digits.
Sample Input :
121
Sample Output :
Saturated'''
n=int(input())
n=set(list(str(n)))
if len(n)==2:
    print("Saturated")
else:
    print("Usaturated")
