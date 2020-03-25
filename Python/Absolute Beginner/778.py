'''You are provided with a number "N", Find the Nth term of the series: 1, 4, 9, 25, 36, 49, 64, 81, .......
(Print "Error" if N = negative value and 0 if N = 0).
Sample Input :
18
Sample Output :
324
'''
n=int(input())
if n==0:
    print(0)
elif n<=0:
    print("Error")
else:
    print(n**2)
