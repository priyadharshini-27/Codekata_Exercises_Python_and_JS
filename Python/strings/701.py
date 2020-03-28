'''You are given string ‘s’. Your task is to modify the string as mentioned below:-
1)The string should not have three consecutive same characters.
2)You can add any number of characters anywhere in the string. 
Find the minimum number of characters which Ishaan must insert in the string.
Sample Input :
aabbbcc
Sample Output :
1
'''
s=input()
length=len(s)
c=0
if length<3:
    print(0)
elif(length==3):
    if s[0]==s[1] and s[0]==s[2]:
        print(1)
    else:
        print(0)
else:
    for i in range(2,length):
        if s[i]==s[i-1] and s[i]==s[i-2]:
            c+=1
    if c==0:
        print(0)
    else:
        print(c)
