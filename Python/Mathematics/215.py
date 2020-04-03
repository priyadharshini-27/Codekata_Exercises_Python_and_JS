'''Given a number N in decimal, print the length of the corresponding binary digit.
Input Size : 1 <= N <= 100000
Sample Testcase :
INPUT
10
OUTPUT
4'''
# Function to print binary number using recursion
array=[]
def convertToBinary(n):
    if n > 1:
       convertToBinary(n//2)
    array.append(n%2)   
   #print(n % 2,end = '')
# decimal number
dec=int(input())
convertToBinary(dec)
print(len(array))
