'''Given a string S, print it after changing the middle element to * (if the length of the string is even, change the 2 middle elements to *).
Sample Testcase :
INPUT
hello
OUTPUT
he*lo
'''
string=input()
length=len(string)
if length%2!=0:
    m=length//2
    string=string[:m]+'*'+string[(m+1):]
    print(string)
else:
    m=length//2
    string=string[:m-1]+'**'+string[m+1:]
    print(string)

