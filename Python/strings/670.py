'''You are given a string ‘s’. 
Your task is to tell whether string is beautiful or not.
A beautiful string is a string in which String starts with ‘a’ or ‘A’ and middle element is either ‘m’ or ‘M’ and last element is ‘z’or ‘Z’
Sample Input :
Amz
Sample Output :
1
'''
s=input()
length=len(s)
if (s[0]=="a" or s[0]=="A") and (s[length-1]=='z'or s[length-1]=='Z'):
    if length%2!=0:
        if s[length//2]=='m' or s[length//2]=='M':
            print(1)
    else:
        l=length//2
        if (s[l]=='m' or s[l]=='M') or (s[l-1]=='m' or s[l-1]=='M'):
            print(1)
else:
    print(0)
