'''The Caesar Cipher technique is one of the earliest and simplest method of encryption technique. 
It’s simply a type of substitution cipher, i.e., each letter of a given text is replaced by a letter some fixed number of positions down the alphabet. 
For example with a shift of 1, A would be replaced by B, B would become C, and so on. 
The method is apparently named after Julius Caesar, who apparently used it to communicate with his officials.
For the given input string(S) and shift print the encrypted string.
Sample Testcase :
INPUT
ABCdEFGHIJKLMNOPQRSTUVWXYz 23
OUTPUT
XYZaBCDEFGHIJKLMNOPQRSTUVw'''
string,shift=input().split()
array=''
for index in range(len(string)):
     # Encrypt lowercase characters 
    if ((string[index]).islower()==True):
        #  E_n(x)=((ord(x)+n-97)%26)+97 LOWER CASE (Encryption Phase with shift n)
        array+=(chr(((ord(string[index])+int(shift)-97)%26)+97))
    else:
        # Encrypt uppercase characters
        array+=(chr(((ord(string[index])+int(shift)-65)%26)+65))
print(array)
