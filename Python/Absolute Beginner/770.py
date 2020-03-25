'''You are provided with a number check whether its odd or even. 
Print "Odd" or "Even" for the corresponding cases.
Note: In case of a decimal, Round off to nearest integer and then find the output.
Incase the input is zero, print "Zero".
Sample Input :
2
Sample Output :
Even
'''
n=float(input())
if round(n)%2==0:
    print("Even")
elif round(n)==0:
    print("Zero")
else:
    print("Odd")
