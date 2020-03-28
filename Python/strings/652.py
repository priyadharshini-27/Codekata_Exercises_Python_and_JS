'''
You are given a ‘true’ string. 
String is called true if weight of string is multiple of 8. 
Your task is to tell whether a string can be declared True or Not. 
Weight of string is the sum of ASCII value of Vowel character(s) present in the string.
Sample Input :
raja
Sample Output :
0
'''
string=input()
length=len(string)
vowels=['a','e','i','o','u']
weight=0
for letters in  string:
    if letters in vowels:
        weight+=ord(letters)
if weight%8==0:
    print(1)
else:
    print(0)
    
    
